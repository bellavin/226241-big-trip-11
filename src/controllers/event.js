import EventComp from '../components/event';
import EventEditComp from '../components/event-edit';
import {render, replace} from '../utils/render';


export default class EventController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._onViewChange = onViewChange;
    this._onDataChange = onDataChange;
    this._mode = `default`;

    this._eventComp = null;
    this._eventEditComp = null;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
  }

  render(event) {
    const oldEventComp = this._eventComp;
    const oldEventEditComp = this._eventEditComp;

    this._eventComp = new EventComp(event);
    this._eventEditComp = new EventEditComp(event);

    this._eventComp.setClickHandler(() => {
      this._replaceEventToEdit();
      document.addEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventEditComp.setRollupClickHandler(() => {
      this._replaceEditToEvent();
    });

    this._eventEditComp.setSubmitHandler((evt) => {
      evt.preventDefault();
      this._replaceEditToEvent();
    });

    this._eventEditComp.setFavoriteBtnClickHandler(() => {
      this._onDataChange(this, event, Object.assign({}, event, {
        isFavorite: !event.isFavorite,
      }));
    });

    if (oldEventComp && oldEventEditComp) {
      replace(this._eventComp, oldEventComp);
      replace(this._eventEditComp, oldEventEditComp);
    } else {
      render(this._container, this._eventComp);
    }
  }

  setDefaultView() {
    if (this._mode !== `default`) {
      this._replaceEditToEvent();
    }
  }

  _replaceEditToEvent() {
    document.removeEventListener(`keydown`, this._onEscKeyDown);
    this._eventEditComp.reset();
    replace(this._eventComp, this._eventEditComp);
    this._mode = `default`;
  }

  _replaceEventToEdit() {
    this._onViewChange();
    replace(this._eventEditComp, this._eventComp);
    this._mode = `edit`;
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
    if (isEscKey) {
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }

}
