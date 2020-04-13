export const render = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
