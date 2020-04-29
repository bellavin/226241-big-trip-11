export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }

    this._element = null;
  }

  _createElement(template) {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement.firstChild;
  }

  getTmp() {
    throw new Error(`Abstract method not implemented: getTmp`);
  }

  getElem() {
    if (!this._element) {
      this._element = this._createElement(this.getTmp());
    }

    return this._element;
  }

  removeElem() {
    this._element = null;
  }
}
