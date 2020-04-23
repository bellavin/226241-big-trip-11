import headerTmp from './event-edit/header.mjs';
import detailsTmp from './event-edit/details.mjs';

import Component from './component';


const tmp = (eventList, event) => `<li class="trip-events__item">
  <form class="event  event--edit" action="#" method="post">
    ${headerTmp(eventList, event)}
    ${detailsTmp(event)}
  </form>
</li>`;


export default class EventEditComp extends Component {
  constructor(eventList, event) {
    super();

    this._eventList = eventList;
    this._event = event;
  }

  getTemplate() {
    return tmp(this._eventList, this._event);
  }
}
