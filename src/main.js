import {render} from './utils/render';
import {INFO_DATA as infoData} from './const';

import {renderTripDays} from './controllers/trip-controller';
import TripFiltersComp from './components/trip-filters';
import TripTabsComp from './components/trip-tabs';
import TripInfoComp from './components/trip-info';


const tripControlsElem = document.querySelector(`.trip-controls`);
render(tripControlsElem.querySelector(`h2:first-child`), new TripTabsComp(`table`).getElement(), `afterEnd`);
render(tripControlsElem, new TripFiltersComp().getElement());


const tripMainElem = document.querySelector(`.trip-main`);
render(tripMainElem, new TripInfoComp(infoData).getElement(), `afterBegin`);

renderTripDays();
