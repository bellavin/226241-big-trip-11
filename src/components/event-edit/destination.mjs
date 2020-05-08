const destinationTmp = (destination) => {
  const desc = destination.description;
  const pictures = destination.pictures;

  const hasDesc = typeof desc === `string` && desc !== ``;
  const hasPictures = Array.isArray(pictures) || pictures.length === 0;
  if (!hasDesc && !hasPictures) {
    return ``;
  }

  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${desc}</p>

    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${pictures.map((pic) => `<img class="event__photo" src="${pic.src}" alt="Event photo">`).join(`\n`)}
      </div>
    </div>
  </section>`;
};


export default destinationTmp;
