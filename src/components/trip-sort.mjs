import {capitalize} from '../utils';
import {SORT_LIST as sortList} from '../const';


const tripSortTmp = (activeItem) => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  <span class="trip-sort__item  trip-sort__item--day"></span>

  ${sortList.map((item) => `<div class="trip-sort__item  trip-sort__item--${item}">
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


export default tripSortTmp;
