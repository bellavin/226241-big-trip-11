import {OFFER as offer} from '../../const';


const offersTmp = (eventType) => {
  const offers = offer[eventType];

  if (!Array.isArray(offers) || offers.length === 0) {
    return ``;
  }

  return `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${offers.map((item, index) => `<div class="event__offer-selector">
          <input 
            class="event__offer-checkbox  visually-hidden"
            id="event-offer-${item.name}-1"
            type="checkbox"
            name="event-offer-${item.name}"
            ${index === 2 ? `checked` : ``}
          >
          <label class="event__offer-label" for="event-offer-${item.name}-1">
            <span class="event__offer-title">Switch to ${item.name} class</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${item.price}</span>
          </label>
        </div>`)
      .join(`\n`)}
    </div>
  </section>`;
};


export default offersTmp;
