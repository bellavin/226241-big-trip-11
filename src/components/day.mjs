import AbstractComponent from './abstract-component';
import {formatDate, formatDate3} from '../utils/utils';
import moment from 'moment';

const tmp = (date, dayNum) => `<li class="trip-days__item  day">
  <div class="day__info">
    <span class="day__counter">${dayNum}</span>
    <time class="day__date" datetime="${formatDate(date)}">${formatDate3(date)}</time>
  </div>

  <ul class="trip-events__list">
  </ul>
</li>`;


export default class DayComp extends AbstractComponent {
  constructor(date, dayNum) {
    super();

    this._date = date ? date : ``;
    this._dateNum = dayNum ? dayNum : ``;
  }

  getTmp() {
    return tmp(this._date, this._dateNum);
  }
}
