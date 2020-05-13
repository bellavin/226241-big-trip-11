import {render} from '../utils/render';

import EventController from '../controllers/event';
import NoPointsComp from '../components/no-points';
import TripSortComp from '../components/trip-sort';
import TripDaysComp from '../components/trip-days';
import DayComp from '../components/day';


const getSortedEvents = (events, sortType) => {
  if (sortType === `sort-event`) {
    const sortedEvents = [...events].sort((a, b) => {
      const date1 = new Date(a.dateFrom).getTime();
      const date2 = new Date(b.dateFrom).getTime();
      return date1 - date2;
    });
    return sortedEvents;
  }

  if (sortType === `sort-price`) {
    const sortedEvents = [...events].sort((a, b) => {
      return a.basePrice - b.basePrice;
    });
    return sortedEvents;
  }

  if (sortType === `sort-time`) {
    const sortedEvents = [...events].sort((a, b) => {
      const date1From = new Date(a.dateFrom).getTime();
      const date1To = new Date(a.dateTo).getTime();
      const date2From = new Date(b.dateFrom).getTime();
      const date2To = new Date(b.dateTo).getTime();
      const date1 = date1To - date1From;
      const date2 = date2To - date2From;
      return date1 - date2;
    });
    return sortedEvents;
  }
};


const renderTrip = (tripDaysElem, events, onDataChange, onViewChange) => {
  const dayComp = new DayComp();
  const dayElem = dayComp.getElem();
  render(tripDaysElem, dayComp);
  const eventListElem = dayElem.querySelector(`.trip-events__list`);

  return events.map((event) => {
    const eventController = new EventController(eventListElem, onDataChange, onViewChange);
    eventController.render(event);
    return eventController;
  });
};


export default class TripController {
  constructor(container) {
    this._container = container;

    this._noPointsComp = new NoPointsComp();
    this._tripSortComp = new TripSortComp(`event`);
    this._tripDaysComp = new TripDaysComp();
    this._dayComp = new DayComp();

    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
    this._tripSortComp.setSortTypeChangeHandler(this._onSortTypeChange);

    this._events = [];

    this._showedEventControllers = [];
  }


  render(events) {
    const container = this._container;
    this._events = events;

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

    const newTrip = renderTrip(tripDaysElem, sortedEvents, this._onDataChange, this._onViewChange);
    this._showedEventControllers = this._showedEventControllers.concat(newTrip);
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
    this._showedEventControllers.forEach((it) => it.setDefaultView());
  }

  _onSortTypeChange(sortType) {
    const tripDaysElem = this._tripDaysComp.getElem();
    const sortedEvents = getSortedEvents(this._events, sortType);
    tripDaysElem.innerHTML = ``;

    const newTrip = renderTrip(tripDaysElem, sortedEvents, this._onDataChange, this._onViewChange);
    this._showedEventControllers = this._showedEventControllers.concat(newTrip);
  }
}
