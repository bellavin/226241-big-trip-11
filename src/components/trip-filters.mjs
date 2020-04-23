import {capitalize} from '../utils/utils';
import {FILTER_LIST as filterList} from '../const';


const tripFiltersTmp = (activeItem) => `<form class="trip-filters" action="#" method="get">

  ${filterList.map((item) => `<div class="trip-filters__filter">
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


export default tripFiltersTmp;
