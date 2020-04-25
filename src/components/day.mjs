import AbstractComponent from './abstract-component';
import {formatDate, formatDate3} from '../utils/utils';


const tmp = (date, dateNum) => `<li class="trip-days__item  day">
  <div class="day__info">
    <span class="day__counter">${dateNum}</span>
    <time class="day__date" datetime="${formatDate(date)}">${formatDate3(date)}</time>
  </div>

  <ul class="trip-events__list">
  </ul>
</li>`;


export default class DayComp extends AbstractComponent {
  constructor(date, dateNum) {
    super();

    this._date = date;
    this._dateNum = dateNum;
  }

  getTemplate() {
    return tmp(this._date, this._dateNum);
  }
}
