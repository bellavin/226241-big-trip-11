import EventComp from '../components/event';
import EventEditComp from '../components/event-edit';
import {EVENT_TYPE_LIST as eventTypeList} from '../const';
import {render} from '../utils/render';


export default class EventController {
  constructor(container, event) {
    this._container = container;
  }

  render(event) {
    const eventComp = new EventComp(event);
    const eventElem = eventComp.getElem();
    render(this._container, eventComp);

    const eventEditComp = new EventEditComp(eventTypeList, event);
    const eventEditElem = eventEditComp.getElem();

    const replaceEventToEdit = () => {
      this._container.replaceChild(eventEditElem, eventElem);
    };

    const replaceEditToEvent = () => {
      this._container.replaceChild(eventElem, eventEditElem);
    };

    const onEscKeyDown = (evt) => {
      const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
      if (isEscKey) {
        replaceEditToEvent();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    eventComp.setClickHandler(() => {
      replaceEventToEdit();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    eventEditComp.setClickHandler(() => {
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

    eventEditComp.setSubmitHandler((evt) => {
      evt.preventDefault();
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });
  }
}
