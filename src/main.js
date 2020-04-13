import {render} from './utils';
import tripFiltersTmp from './components/trip-filters';
import tripTabsTmp from './components/trip-tabs';
import tripSortTmp from './components/trip-sort';
import tripDaysTmp from './components/trip-days';
import tripInfoTmp from './components/trip-info';


const tripControlsElem = document.querySelector(`.trip-controls`);
render(tripControlsElem.querySelector(`h2:first-child`), tripTabsTmp(`table`), `afterEnd`);
render(tripControlsElem, tripFiltersTmp(`everything`));


const tripEventsElem = document.querySelector(`.trip-events`);
render(tripEventsElem, tripSortTmp(`event`));
render(tripEventsElem, tripDaysTmp);


const tripMainElem = document.querySelector(`.trip-main`);
render(tripMainElem, tripInfoTmp(1230, `Amsterdam &mdash; Chamonix &mdash; Geneva`, `Mar 18&nbsp;&mdash;&nbsp;20`), `afterBegin`);
