import AbstractComponent from './abstract-component';
import {capitalize} from '../utils/utils';


const FILTER_LIST = [`everything`, `future`, `past`];

const tmp = (activeItem) => `<form class="trip-filters" action="#" method="get">

  ${FILTER_LIST.map((item) => `<div class="trip-filters__filter">
    <input
      id="filter-${item}"
      class="trip-filters__filter-input  visually-hidden"
      type="radio"
      name="trip-filter"
      value="${item}"
      ${item === activeItem ? `checked` : ``}
    >
    <label class="trip-filters__filter-label" for="filter-${item}">${capitalize(item)}</label>
  </div>`)
  .join(`\n`)}

  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;


export default class TripFiltersComp extends AbstractComponent {
  constructor(activeItem) {
    super();

    this._activeItem = activeItem;
  }

  getTemplate() {
    return tmp(this._activeItem);
  }
}
