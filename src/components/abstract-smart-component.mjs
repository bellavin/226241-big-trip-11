import AbstractComponent from "./abstract-component.js";


export default class AbstractSmartComponent extends AbstractComponent {
  recoveryListeners() {
    throw new Error(`Abstract method not implemented: recoveryListeners`);
  }

  rerender() {
    const oldElem = this.getElem();
    const parentElem = oldElem.parentElement;

    this.removeElement();

    const newElem = this.newElem();

    parentElem.replaceChild(newElem, oldElem);

    this.recoveryListeners();
  }
}
