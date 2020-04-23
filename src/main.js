import TripController from './controllers/trip-controller';
import points from './mock/points';
import {render} from './utils/render';
import {INFO_DATA as infoData, EVENT_TYPE_LIST as eventTypeList} from './const';

import tripFiltersTmp from './components/trip-filters';
import TripTabsComp from './components/trip-tabs';
import TripInfoComp from './components/trip-info';
import TripDaysComp from './components/trip-days';
import DayComp from './components/day';
import EventComp from './components/event';
import EventEditComp from './components/event-edit';


const tripControlsElem = document.querySelector(`.trip-controls`);
render(tripControlsElem.querySelector(`h2:first-child`), new TripTabsComp(`table`).getElement(), `afterEnd`);
// render(tripControlsElem, tripFiltersTmp(`everything`));


const tripMainElem = document.querySelector(`.trip-main`);
render(tripMainElem, new TripInfoComp(infoData).getElement(), `afterBegin`);


const renderTripDays = () => {
  const tripEventsElem = document.querySelector(`.trip-events`);

  const tripDaysComp = new TripDaysComp();
  const tripDaysElem = tripDaysComp.getElement();
  render(tripEventsElem, tripDaysElem);

  const tripDaysData = new TripController(points).getTrip();

  tripDaysData.forEach((day, idx) => {
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
      const editForm = eventEditElem.querySelector(`form`);

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

      const eventBtnElem = eventElem.querySelector(`.event__rollup-btn`);
      const editBtnElem = eventEditElem.querySelector(`.event__rollup-btn`);

      eventBtnElem.addEventListener(`click`, () => {
        replaceEventToEdit();
        document.addEventListener(`keydown`, onEscKeyDown);
      });

      editBtnElem.addEventListener(`click`, () => {
        replaceEditToEvent();
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

      editForm.addEventListener(`submit`, (evt) => {
        evt.preventDefault();
        replaceEditToEvent();
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    });
  });
};

renderTripDays();
