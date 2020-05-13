import AbstractComponent from "./abstract-component";


export default class AbstractSmartComponent extends AbstractComponent {
  recoveryListeners() {
    throw new Error(`Abstract method not implemented: recoveryListeners`);
  }

  rerender() {
    const oldElem = this.getElem();
    const parentElem = oldElem.parentElement;

    this.removeElem();

    const newElem = this.getElem();

    parentElem.replaceChild(newElem, oldElem);

    this.recoveryListeners();
  }
}
