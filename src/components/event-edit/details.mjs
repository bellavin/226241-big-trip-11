import offersTmp from './offers.mjs';
import destinationTmp from './destination.mjs';


const detailsTmp = (event) => {
  if (offersTmp(event.type) === `` && destinationTmp(event.destination) === ``) {
    return ``;
  }

  return `<section class="event__details">
    ${offersTmp(event.type)}
    ${destinationTmp(event.destination)}
  </section>`;
};


export default detailsTmp;
