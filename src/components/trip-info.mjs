import Component from './component';


const mainTmp = (route, date) => `<div class="trip-info__main">
  <h1 class="trip-info__title">${route}</h1>
  <p class="trip-info__dates">${date}</p>
</div>`;


const tmp = (total, route, date) => `<section class="trip-main__trip-info  trip-info">
  ${route ? mainTmp(route, date) : ``}

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">
      ${total ? total : 0}
    </span>
  </p>
</section>`;


export default class TripInfoComp extends Component {
  constructor(info) {
    super();

    this._total = info.total;
    this._route = info.route;
    this._date = info.date;
  }

  getTemplate() {
    return tmp(this._total, this._route, this._date);
  }
}
