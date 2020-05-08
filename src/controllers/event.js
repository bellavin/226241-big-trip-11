import EventComp from '../components/event';
import EventEditComp from '../components/event-edit';
import {render, replace} from "../utils/render";


const Mode = {
  DEFAULT: `default`,
  EDIT: `edit`,
};

export default class EventController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;
    this._mode = Mode.DEFAULT;
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

    this._eventEditComp.setClickHandler(() => {
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventEditComp.setSubmitHandler((evt) => {
      evt.preventDefault();
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    });

    this._eventEditComp.setFavoritesButtonClickHandler(() => {
      this._onDataChange(this, event, Object.assign({}, event, {
        isFavorite: !event.isFavorite
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
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToTask();
    }
  }

  _replaceEventToEdit() {
    this._onViewChange();
    replace(this._eventEditComp, this._eventComp);
    this._mode = Mode.EDIT;
  }

  _replaceEditToEvent() {
    this._onViewChange();
    replace(this._eventComp, this._eventEditComp);
    this._mode = Mode.DEFAULT;
    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  _onEscKeyDown(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
    if (isEscKey) {
      this._replaceEditToEvent();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }
}
