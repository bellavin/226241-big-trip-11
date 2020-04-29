import {formatDate} from '../utils/utils';
import {render} from '../utils/render';
import {EVENT_TYPE_LIST as eventTypeList} from '../const';

import NoPointsComp from '../components/no-points';
import TripSortComp from '../components/trip-sort';
import TripDaysComp from '../components/trip-days';
import DayComp from '../components/day';
import EventComp from '../components/event';
import EventEditComp from '../components/event-edit';


const getSortedEvents = (events, sortType) => {

  let sortedEvents = [];

  if (sortType === `sort-event`) {
    const sortedPoints = [...events].sort((a, b) => {
      const date1 = new Date(a.dateFrom).getTime();
      const date2 = new Date(b.dateFrom).getTime();
      return date1 - date2;
    });

    const days = new Set();
    sortedPoints.forEach((it) => {
      days.add(formatDate(it.dateFrom));
    });

    const tripDays = [];
    days.forEach((day) => {
      return tripDays.push({
        day,
        points: []
      });
    });

    tripDays.forEach((day) => {
      events.forEach((point) => {
        if (day.day === formatDate(point.dateFrom)) {
          day.points.push(point);
        }
      });
    });
    sortedEvents = tripDays;
  }

  if (sortType === `sort-price`) {
    const sortedPoints = [...events].sort((a, b) => {
      return a.basePrice - b.basePrice;
    });

    const tripDays = [{
      day: ``,
      points: []
    }];

    sortedPoints.forEach((point) => {
      tripDays[0].points.push(point);
    });
    sortedEvents = tripDays;
  }

  if (sortType === `sort-time`) {
    const sortedPoints = [...events].sort((a, b) => {
      const date1From = new Date(a.dateFrom).getTime();
      const date1To = new Date(a.dateTo).getTime();
      const date2From = new Date(b.dateFrom).getTime();
      const date2To = new Date(b.dateTo).getTime();
      const date1 = date1To - date1From;
      const date2 = date2To - date2From;
      return date1 - date2;
    });

    const tripDays = [{
      day: ``,
      points: []
    }];

    sortedPoints.forEach((point) => {
      tripDays[0].points.push(point);
    });
    sortedEvents = tripDays;
  }

  return sortedEvents;
};


const renderEvent = (eventListElem, event) => {
  const eventComp = new EventComp(event);
  const eventElem = eventComp.getElem();
  render(eventListElem, eventComp);

  const eventEditComp = new EventEditComp(eventTypeList, event);
  const eventEditElem = eventEditComp.getElem();

  const replaceEventToEdit = () => {
    eventListElem.replaceChild(eventEditElem, eventElem);
  };

  const replaceEditToEvent = () => {
    eventListElem.replaceChild(eventElem, eventEditElem);
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
    if (isEscKey) {
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  eventComp.setClickHandler(() => {
    replaceEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  eventEditComp.setClickHandler(() => {
    replaceEditToEvent();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  eventEditComp.setSubmitHandler((evt) => {
    evt.preventDefault();
    replaceEditToEvent();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });
};


const renderTrip = (tripDaysElem, events) => {
  events.forEach((day, index) => {
    const dayComp = new DayComp(day.day, index + 1);
    const dayElem = dayComp.getElem();

    render(tripDaysElem, dayComp);

    const eventListElem = dayElem.querySelector(`.trip-events__list`);
    day.points.forEach((event) => {
      renderEvent(eventListElem, event);
    });
  });
};


export default class TripController {
  constructor(container) {
    this._container = container;

    this._noPointsComp = new NoPointsComp();
    this._tripSortComp = new TripSortComp(`event`);
    this._tripDaysComp = new TripDaysComp();
    this._dayComp = new DayComp();
  }

  render(events) {
    const container = this._container;

    const noPointsComp = this._noPointsComp;
    const tripSortComp = this._tripSortComp;
    const tripDaysComp = this._tripDaysComp;

    if (!Array.isArray(events) || events.length === 0) {
      render(container, noPointsComp);
      return;
    }

    render(container, tripSortComp);
    render(container, tripDaysComp);


    const tripDaysElem = this._tripDaysComp.getElem();
    const sortedEvents = getSortedEvents(events, this._tripSortComp.getSortType());
    renderTrip(tripDaysElem, sortedEvents);

    this._tripSortComp.setSortTypeChangeHandler((sortType) => {
      const sortedPoints = getSortedEvents(events, sortType);

      tripDaysElem.innerHTML = ``;

      renderTrip(tripDaysElem, sortedPoints);
    });
  }
}
