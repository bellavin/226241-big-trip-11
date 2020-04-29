import AbstractComponent from './abstract-component';


const tmp = () => `<ul class="trip-days"></ul>`;


export default class TripDaysComp extends AbstractComponent {
  constructor() {
    super();
  }

  getTmp() {
    return tmp();
  }
}
