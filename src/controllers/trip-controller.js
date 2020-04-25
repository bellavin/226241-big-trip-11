import {sortType, getRoute} from '../utils/utils';
import {render} from '../utils/render';
import {EVENT_TYPE_LIST as eventTypeList} from '../const';

import points from '../mock/points';

import NoPoints from '../components/no-points';
import TripSortComp from '../components/trip-sort';
import TripDaysComp from '../components/trip-days';
import DayComp from '../components/day';
import EventComp from '../components/event';
import EventEditComp from '../components/event-edit';


export const renderTripDays = () => {
  const tripEventsElem = document.querySelector(`.trip-events`);

  const tripDaysComp = new TripDaysComp();
  const tripDaysElem = tripDaysComp.getElement();
  render(tripEventsElem, tripDaysElem);

  const tripRoute = getRoute(points, sortType.BY_DATE);

  tripRoute.forEach((day, idx) => {
    const dayComp = new DayComp(day.day, idx + 1);
    const dayElem = dayComp.getElement();
    render(tripDaysElem, dayElem);

    day.points.forEach((point) => {
      const eventList = dayElem.querySelector(`.trip-events__list`);
      const eventComp = new EventComp(point);
      const eventElem = eventComp.getElement();
      render(eventList, eventElem);

      const eventEditComp = new EventEditComp(eventTypeList, point);
      const eventEditElem = eventEditComp.getElement();

      const replaceEventToEdit = () => {
        eventList.replaceChild(eventEditElem, eventElem);
      };

      const replaceEditToEvent = () => {
        eventList.replaceChild(eventElem, eventEditElem);
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
    });
  });
};
