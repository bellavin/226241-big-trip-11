import AbstractComponent from './abstract-component';


const tmp = () => `<p class="trip-events__msg">
  Click New Event to create your first point
</p>`;


export default class NoPointsComp extends AbstractComponent {
  getTmp() {
    return tmp();
  }
}
