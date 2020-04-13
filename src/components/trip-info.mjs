const tripInfoMainTmp = (route, date) => `<div class="trip-info__main">
  <h1 class="trip-info__title">${route}</h1>
  <p class="trip-info__dates">${date}</p>
</div>`;


const tripInfoTmp = (total, route, date) => `<section class="trip-main__trip-info  trip-info">
  ${route ? tripInfoMainTmp(route, date) : ``}

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">
      ${total ? total : 0}
    </span>
  </p>
</section>`;


export default tripInfoTmp;
