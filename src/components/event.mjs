import AbstractSmartComponent from './abstract-smart-component';
import {capitalize} from '../utils/utils';
import {POSTPOSITION as postposition} from '../const';
import moment from 'moment';


const eventDuration = (start, end) => {
  const milliseconds = new Date(end) - new Date(start);

  let dd = Math.floor(new Date(milliseconds).getUTCHours() / 24);
  let hh = new Date(milliseconds).getUTCHours();
  let mm = new Date(milliseconds).getUTCMinutes();

  dd = dd ? `${dd}D` : ``;
  hh = hh ? `${hh}H` : ``;
  mm = mm ? `${mm}M` : `00`;

  return dd + hh + mm;
};


const tmp = (event) => {
  const title = capitalize(event.type) + ` ` + postposition[event.type] + ` ` + event.destination.name;
  const dateFrom = moment(event.dateFrom).format(`DD-MM-YY`);
  const timeFrom = moment(event.dateFrom).format(`HH:mm`);
  const dateTo = moment(event.dateTo).format(`DD-MM-YY`);
  const timeTo = moment(event.dateTo).format(`HH:mm`);
  const duration = eventDuration(event.dateFrom, event.dateTo);


  return `<li class="trip-events__item">
  <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${event.type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${title}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time
          class="event__start-time"
          datetime="${dateFrom}T${timeFrom}"
        >
          ${timeFrom}
        </time>
        &mdash;
        <time
          class="event__end-time"
          datetime="${dateTo}T${timeTo}"
        >
        ${timeTo}
        </time>
      </p>
      <p class="event__duration">
        ${duration}
      </p>
    </div>

    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${event.basePrice}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">Order Uber</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">20</span>
      </li>
    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};


export default class EventComp extends AbstractSmartComponent {
  constructor(event) {
    super();

    this._event = event;
  }

  getTmp() {
    return tmp(this._event);
  }

  setClickHandler(cb) {
    this.getElem().querySelector(`.event__rollup-btn`).addEventListener(`click`, cb);
  }
}
