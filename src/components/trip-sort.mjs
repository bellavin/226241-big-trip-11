import AbstractComponent from './abstract-component';
import {capitalize} from '../utils/utils';


const SORT_LIST = [`event`, `time`, `price`];

const tmp = () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  <span class="trip-sort__item  trip-sort__item--day"></span>

  ${SORT_LIST.map((item, index) => `<div class="trip-sort__item  trip-sort__item--${item}">
    <input
      id="sort-${item}"
      class="trip-sort__input  visually-hidden"
      type="radio"
      name="trip-sort"
      value="sort-${item}"
      ${index === 0 ? `checked` : ``}
    >
    <label
      class="trip-sort__btn  ${index === 0 ? `trip-sort__btn--active  trip-sort__btn--by-increase` : ``}"
      for="sort-${item}"
    >
      ${capitalize(item)}
    </label>
  </div>`)
  .join(`\n`)}

  <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
</form>`;


export default class TripSortComp extends AbstractComponent {
  constructor() {
    super();

    this._currenSortType = `sort-event`;
  }

  getTmp() {
    return tmp(this._activeItem);
  }

  getSortType() {
    return this._currenSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElem().addEventListener(`click`, (evt) => {

      if (evt.target.tagName !== `INPUT`) {
        return;
      }

      const sortType = evt.target.value;

      if (this._currenSortType === sortType) {
        return;
      }

      this._currenSortType = sortType;
      handler(this._currenSortType);
    });
  }
}
