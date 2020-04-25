import AbstractComponent from './abstract-component';
import {capitalize} from '../utils/utils';


const SORT_LIST = [`event`, `time`, `price`];

const tmp = (activeItem) => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  <span class="trip-sort__item  trip-sort__item--day"></span>

  ${SORT_LIST.map((item) => `<div class="trip-sort__item  trip-sort__item--${item}">
    <input
      id="sort-${item}"
      class="trip-sort__input  visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-event"
      ${item === activeItem ? `checked` : ``}
    >
    <label
      class="trip-sort__btn  ${item === activeItem ? `trip-sort__btn--active  trip-sort__btn--by-increase` : ``}"
      for="sort-${item}"
    >
      ${capitalize(item)}
    </label>
  </div>`)
  .join(`\n`)}

  <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
</form>`;


export default class TripSortComp extends AbstractComponent {
  constructor(activeItem) {
    super();

    this._activeItem = activeItem;
  }

  getTemplate() {
    return tmp(this._activeItem);
  }
}
