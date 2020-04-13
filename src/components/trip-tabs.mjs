import {capitalize} from '../utils';
import {TAB_LIST as tabList} from '../const';


const tripTabsTmp = (activeItem) => `<nav class="trip-controls__trip-tabs  trip-tabs">
  ${tabList.map((item) => `<a
    class="trip-tabs__btn  ${item === activeItem ? `trip-tabs__btn--active` : ``}"
    href="#"
  >
    ${capitalize(item)}
  </a>`)
  .join(`\n`)}
</nav>`;


export default tripTabsTmp;
