import offersTmp from './offers.mjs';
import destinationTmp from './destination.mjs';


const detailsTmp = (eventType) => {
  if (offersTmp(eventType) === `` && destinationTmp() === ``) {
    return ``;
  }

  return `<section class="event__details">
    ${offersTmp(eventType)}
    ${destinationTmp()}
  </section>`;
};


export default detailsTmp;
