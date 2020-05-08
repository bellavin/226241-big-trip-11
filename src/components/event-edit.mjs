import AbstractComponent from './abstract-component';
import headerTmp from './event-edit/header';
import detailsTmp from './event-edit/details';
import {EVENT_TYPE_LIST as eventTypeList} from '../const';


const tmp = (eventList, event) => `<li class="trip-events__item">
  <form class="event  event--edit" action="#" method="post">
    ${headerTmp(eventList, event)}
    ${detailsTmp(event)}
  </form>
</li>`;


export default class EventEditComp extends AbstractComponent {
  constructor(event) {
    super();

    this._eventList = eventTypeList;
    this._event = event;
  }

  getTmp() {
    return tmp(this._eventList, this._event);
  }

  setClickHandler(cb) {
    this.getElem().querySelector(`.event__rollup-btn`).addEventListener(`click`, cb);
  }

  setSubmitHandler(cb) {
    this.getElem().querySelector(`form`).addEventListener(`submit`, cb);
  }

  setFavoritesButtonClickHandler(cb) {
    this.getElem().querySelector(`.event__favorite-checkbox`).addEventListener(`click`, cb);
  }
}
