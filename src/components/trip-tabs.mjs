import AbstractComponent from './abstract-component';
import {capitalize} from '../utils/utils';


const TAB_LIST = [`table`, `stats`];

const tmp = (activeItem) => `<nav class="trip-controls__trip-tabs  trip-tabs">
  ${TAB_LIST.map((item) => `<a
    class="trip-tabs__btn  ${item === activeItem ? `trip-tabs__btn--active` : ``}"
    href="#"
  >
    ${capitalize(item)}
  </a>`)
  .join(`\n`)}
</nav>`;


export default class TripTabsComp extends AbstractComponent {
  constructor(activeItem) {
    super();

    this._activeItem = activeItem;
  }

  getTmp() {
    return tmp(this._activeItem);
  }
}
