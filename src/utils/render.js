export const render = (container, comp, place = `beforeEnd`) => {
  switch (place) {
    case `afterBegin`:
      container.prepend(comp.getElem());
      break;
    case `beforeEnd`:
      container.append(comp.getElem());
      break;
  }
};

export const replace = (newComp, oldComp) => {
  const parentElem = oldComp.getElem().parentElem;
  const newElem = newComp.getElem();
  const oldElem = oldComp.getElem();

  const isExistElems = !!(parentElem && newElem && oldElem);

  if (isExistElems && parentElem.contains(oldElem)) {
    parentElem.replaceChild(newElem, oldElem);
  }
};

export const remove = (component) => {
  component.getElem().remove();
  component.removeElem();
};
