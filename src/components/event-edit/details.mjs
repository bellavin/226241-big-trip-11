import offersTmp from './offers';
import destinationTmp from './destination';


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
