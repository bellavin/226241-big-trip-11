import Component from './component';


const tmp = () => `<ul class="trip-days"></ul>`;


export default class TripDaysComp extends Component {
  constructor() {
    super();
  }

  getTemplate() {
    return tmp();
  }
}
