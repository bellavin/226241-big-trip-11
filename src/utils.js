export const render = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};
