import headerTmp from './event-edit/header.mjs';
import detailsTmp from './event-edit/details.mjs';


const eventEditTmp = (eventList, eventType) => `<form class="event  event--edit" action="#" method="post">
  ${headerTmp(eventList, eventType)}
  ${detailsTmp(eventType)}
</form>`;


export default eventEditTmp;
