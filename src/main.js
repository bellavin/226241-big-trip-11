import {render} from './utils/render';
import {INFO_DATA as infoData} from './const';
import points from './mock/points';

import TripController from './controllers/trip-controller';
import TripFiltersComp from './components/trip-filters';
import TripTabsComp from './components/trip-tabs';
import TripInfoComp from './components/trip-info';


const tripControlsElem = document.querySelector(`.trip-controls`);
render(tripControlsElem.querySelector(`h2:first-child`), new TripTabsComp(`table`), `afterEnd`);
render(tripControlsElem, new TripFiltersComp());

const tripMainElem = document.querySelector(`.trip-main`);
render(tripMainElem, new TripInfoComp(infoData), `afterBegin`);

const tripEventsElem = document.querySelector(`.trip-events`);
new TripController(tripEventsElem).render(points);
