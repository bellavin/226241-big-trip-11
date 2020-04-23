export const render = (container, element, place = `beforeEnd`) => {
  switch (place) {
    case `afterBegin`:
      container.prepend(element);
      break;
    case `beforeEnd`:
      container.append(element);
      break;
  }
};

export const replace = (newComp, oldComp) => {
  const parentElem = oldComp.getElement().parentElem;
  const newElem = newComp.getElement();
  const oldElem = oldComp.getElement();

  const isExistElems = !!(parentElem && newElem && oldElem);

  if (isExistElems && parentElem.contains(oldElem)) {
    parentElem.replaceChild(newElem, oldElem);
  }
};

export const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};
