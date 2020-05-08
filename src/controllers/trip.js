import {formatDate} from '../utils/utils';
import {render} from '../utils/render';

import EventController from '../controllers/event'
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


const renderTrip = (tripDaysElem, events) => {
  const dayComp = new DayComp();
  const dayElem = dayComp.getElem();
  render(tripDaysElem, dayComp);
  const eventListElem = dayElem.querySelector(`.trip-events__list`);

  return events.map((event) => {
    const eventController = new EventController(eventListElem);
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
