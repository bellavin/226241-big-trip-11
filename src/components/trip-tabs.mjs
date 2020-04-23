import {capitalize} from '../utils/utils';
import {TAB_LIST as tabList} from '../const';

import Component from './component';


const tmp = (activeItem) => `<nav class="trip-controls__trip-tabs  trip-tabs">
  ${tabList.map((item) => `<a
    class="trip-tabs__btn  ${item === activeItem ? `trip-tabs__btn--active` : ``}"
    href="#"
  >
    ${capitalize(item)}
  </a>`)
  .join(`\n`)}
</nav>`;


export default class TripTabsComp extends Component {
  constructor(activeItem) {
    super();

    this._activeItem = activeItem;
  }

  getTemplate() {
    return tmp(this._activeItem);
  }
}
