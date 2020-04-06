import {render} from './utils';
import tripTabs from './components/trip-tabs';
import tripFiltersTmp from './components/trip-filters';
import tripSortTmp from './components/trip-sort';
import tripDays from './components/trip-days';


const tripControlsElem = document.querySelector(`.trip-controls`);
render(tripControlsElem.querySelector(`h2:first-child`), tripTabs, `afterEnd`);
render(tripControlsElem, tripFiltersTmp);


const tripEventsElem = document.querySelector(`.trip-events`);
render(tripEventsElem, tripSortTmp);
render(tripEventsElem, tripDays);
