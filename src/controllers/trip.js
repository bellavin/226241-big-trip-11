import {formatDate} from '../utils/utils';
import {render} from '../utils/render';

import EventController from "./event";
import NoPointsComp from '../components/no-points';
import TripSortComp from '../components/trip-sort';
import TripDaysComp from '../components/trip-days';
import DayComp from '../components/day';


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


const renderEvents = (tripDaysElem, events, onDataChange, onViewChange) => {
  events.forEach((day, index) => {
    const dayComp = new DayComp(day.day, index + 1);
    const dayElem = dayComp.getElem();

    render(tripDaysElem, dayComp);

    const eventListElem = dayElem.querySelector(`.trip-events__list`);
    day.points.map((event) => {
      const eventController = new EventController(eventListElem, onDataChange, onViewChange);
      eventController.render(event);

      return eventController;
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

    this._showedEventControllers = [];

    this._onDataChange = this._onDataChange.bind(this);
    // this._onSortTypeChange = this._onSortTypeChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
  }

  render(events) {
    this._events = events;

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
    const newEvents = renderEvents(tripDaysElem, sortedEvents, this._onDataChange, this._onViewChange);
    this._showedEventControllers = this._showedEventControllers.concat(newEvents);

    this._tripSortComp.setSortTypeChangeHandler((sortType) => {
      const sortedPoints = getSortedEvents(events, sortType);

      tripDaysElem.innerHTML = ``;

      renderEvents(tripDaysElem, sortedPoints, this._onDataChange, this._onViewChange);
    });
  }

  _onDataChange(eventController, oldData, newData) {
    const index = this._events.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._events = [].concat(this._events.slice(0, index), newData, this._events.slice(index + 1));

    eventController.render(this._events[index]);
  }

  _onViewChange() {
    console.log(this._showedEventControllers);
    this._showedEventControllers.forEach((it) => it.setDefaultView());
  }
}
