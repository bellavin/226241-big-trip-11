import AbstractSmartComponent from './abstract-smart-component';

import {capitalize, formatDate2, formatTime} from '../utils/utils';
import {
  POSTPOSITION as postposition,
  EVENT_TYPE_LIST as eventList,
  OFFER as offer
} from '../const';


const destinationTmp = (destination = {}) => {
  const {desc, pics} = destination;

  const hasDesc = typeof desc === `string` && desc !== ``;
  const hasPictures = Array.isArray(pics) || pics.length === 0;
  if (!hasDesc && !hasPictures) {
    return ``;
  }

  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${desc}</p>

    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${pics.map((pic) => `<img class="event__photo" src="${pic.src}" alt="Event photo">`)}
      </div>
    </div>
  </section>`;
};


const offersTmp = (event, eventType, activeOffers) => {
  const offers = offer[eventType];

  if (!Array.isArray(offers) || offers.length === 0) {
    return ``;
  }

  return `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${offers.map((item) => {
    const checkboxName = item.name.split(` `).join(`-`).toLowerCase();

    return `<div class="event__offer-selector">
          <input
            class="event__offer-checkbox  visually-hidden"
            id="event-offer-${checkboxName}-${event.id}"
            type="checkbox"
            name="event-offer-${checkboxName}"
            value="${item.name}"
            ${activeOffers.includes(item.name) ? `checked` : ``}
          >
          <label class="event__offer-label" for="event-offer-${checkboxName}-${event.id}">
            <span class="event__offer-title">Switch to ${item.name}</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${item.price}</span>
          </label>
        </div>`;
  }).join(`\n`)}
    </div>
  </section>`;
};


const detailsTmp = (event, type, activeOffers, destinationList) => {
  const offers = offersTmp(event, type, activeOffers);
  const destination = destinationTmp(destinationList);

  if (offers === `` && destination === ``) {
    return ``;
  }

  return `<section class="event__details">
    ${offers}
    ${destination}
  </section>`;
};


const headerTmp = (event, type, options = {}) => {
  const {isFavorite, dateFrom, dateTo, price, name} = options;

  return `<header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-${event.id}">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${event.id}" type="checkbox">

      <div class="event__type-list">
        ${eventList.map((group) => `<fieldset class="event__type-group">
          <legend class="visually-hidden">
            ${capitalize(group.name)}
          </legend>

          ${group.list.map((item) => `<div class="event__type-item">
            <input
              id="event-type-${item}-${event.id}"
              class="event__type-input  visually-hidden"
              type="radio"
              name="event-type"
              value="${item}"
              ${item === type ? `checked` : ``}
            >

            <label
              class="event__type-label  event__type-label--${item}"
              for="event-type-${item}-${event.id}"
            >
              ${capitalize(item)}
            </label>
          </div>`)
          .join(`\n`)}

        </fieldset>`)
        .join(`\n`)}
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-${event.id}">
        ${capitalize(type)} ${postposition[type]}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-${event.id}" type="text" name="event-destination" value="${name}" list="destination-list-${event.id}">
      <datalist id="destination-list-${event.id}">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${event.id}">
        From
      </label>
      <input class="event__input  event__input--time" id="event-start-time-${event.id}" type="text" name="event-start-time" value="${formatDate2(dateFrom)} ${formatTime(dateFrom)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${event.id}">
        To
      </label>
      <input class="event__input  event__input--time" id="event-end-time-${event.id}" type="text" name="event-end-time" value="${formatDate2(dateTo)} ${formatTime(dateTo)}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-${event.id}">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-${event.id}" type="text" name="event-price" value="${price}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>

    <input id="event-favorite-${event.id}" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${isFavorite ? `checked` : ``}>
    <label class="event__favorite-btn" for="event-favorite-${event.id}">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </label>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>`;
};


const tmp = (event, type, offers, options, destination) => {

  return `<li class="trip-events__item">
    <form class="event  event--edit" action="#" method="post">
      ${headerTmp(event, type, options)}
      ${detailsTmp(event, type, offers, destination)}
    </form>
  </li>`;
};


export default class EventEditComp extends AbstractSmartComponent {
  constructor(event) {
    super();

    this._event = event;

    this._eventType = event.type;

    this._eventIsFavorite = event.isFavorite;
    this._eventBasePrice = event.basePrice;
    this._eventDateFrom = event.dateFrom;
    this._eventDateTo = event.dateTo;

    this._eventOffers = event.offers.map((item) => item.title);

    this._eventDestinationName = event.destination.name;
    this._eventDestinationDesc = event.destination.description;
    this._eventDestinationPics = event.destination.pictures;

    this._submitHandler = null;

    this._subscribeOnEvents();
  }

  getTmp() {
    return tmp(
        this._event,
        this._eventType,
        this._eventOffers,
        {
          isFavorite: this._eventIsFavorite,
          dateFrom: this._eventDateFrom,
          dateTo: this._eventDateTo,
          price: this._eventBasePrice,
          name: this._eventDestinationName,
        },
        {
          desc: this._eventDestinationDesc,
          pics: this._eventDestinationPics,
        }
    );
  }

  recoveryListeners() {
    this.setSubmitHandler(this._submitHandler);
    this.setRollupClickHandler(this._rollupClickHandler);
    this._subscribeOnEvents();
  }

  rerender() {
    super.rerender();
  }

  reset() {
    const event = this._event;

    this._eventType = event.type;

    this._eventIsFavorite = event.isFavorite;
    this._eventBasePrice = event.basePrice;
    this._eventDateFrom = event.dateFrom;
    this._eventDateTo = event.dateTo;

    this._eventOffers = event.offers.map((item) => item.title);

    this._eventDestinationName = event.destination.name;
    this._eventDestinationDesc = event.destination.description;
    this._eventDestinationPics = event.destination.pictures;

    this.rerender();
  }

  setRollupClickHandler(handler) {
    this.getElem().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler);
    this._rollupClickHandler = handler;
  }

  setSubmitHandler(handler) {
    this.getElem().querySelector(`form`).addEventListener(`submit`, handler);
    this._submitHandler = handler;
  }

  setFavoriteBtnClickHandler(handler) {
    this.getElem().querySelector(`.event__favorite-btn`).addEventListener(`click`, handler);
  }

  _subscribeOnEvents() {
    const elem = this.getElem();


    elem.querySelectorAll(`.event__type-label`).forEach((element) => {
      element.addEventListener(`click`, () => {
        const inputElem = element.parentElement.querySelector(`.event__type-input`);
        this._eventType = inputElem.value;
        this.rerender();
      });
    });

    elem.querySelector(`.event__input--destination`).addEventListener(`change`, (evt) => {
      this._eventDestinationName = evt.target.value;
      this.rerender();
    });

    elem.querySelector(`[name="event-start-time"]`).addEventListener(`change`, (evt) => {
      this._eventDateFrom = evt.target.value;
      this.rerender();
    });

    elem.querySelector(`[name="event-end-time"]`).addEventListener(`change`, (evt) => {
      this._eventDateTo = evt.target.value;
      this.rerender();
    });

    elem.querySelector(`.event__input--price`).addEventListener(`change`, (evt) => {
      this._eventBasePrice = evt.target.value;
      this.rerender();
    });

    elem.querySelector(`.event__favorite-btn`).addEventListener(`click`, () => {
      this._eventIsFavorite = !this._eventIsFavorite;
      this.rerender();
    });

    // const offers = elem.querySelector(`.event__available-offers`);
    // if (offers) {
    //   offers.addEventListener(`click`, (evt) => {
    //     if (evt.target.checked) {
    //       console.log(this._eventOffers);
    //       console.log(item);
    //       console.log(evt.target.value);

    //       this._eventOffers.push(evt.target.value);

    //     } else {
    //       this._eventOffers.filter((item) => {
    //         console.log(this._eventOffers);
    //         console.log(item);
    //         console.log(evt.target.value);

    //         return item !== evt.target.value;
    //       });
    //     }

    //     this.rerender();
    //   });
    // }
  }
}
