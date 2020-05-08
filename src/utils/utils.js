export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


const addZero = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatDate = (date) => {
  if (date) {
    let yy = new Date(date).getFullYear();
    let mm = new Date(date).getMonth() + 1;
    let dd = new Date(date).getDate();
    mm = addZero(mm);
    dd = addZero(dd);
    return `${yy}-${mm}-${dd}`;
  }

  return ``;
};


export const formatDate2 = (date) => {
  if (date) {
    let yy = new Date(date).getFullYear();
    let mm = new Date(date).getMonth() + 1;
    let dd = new Date(date).getDate();
    yy = String(yy).slice(2, 4);
    mm = addZero(mm);
    dd = addZero(dd);
    return `${dd}/${mm}/${yy}`;
  }

  return ``;
};


export const formatDate3 = (date) => {
  if (date) {
    const monthNames = [`JAN`, `FEB`, `MAR`, `APR`, `MAY`, `JUN`, `JUL`, `AUG`, `SEPT`, `OCT`, `NOV`, `DEC`];
    let mm = new Date(date).getMonth();
    let dd = new Date(date).getDate();
    mm = monthNames[mm];
    dd = addZero(dd);
    return `${mm} ${dd}`;
  }

  return ``;
};


export const formatTime = (date) => {
  if (date) {
    let hh = new Date(date).getUTCHours() % 12;
    let mm = new Date(date).getUTCMinutes();

    hh = hh ? `${addZero(hh)}` : `00`;
    mm = mm ? `${addZero(mm)}` : `00`;

    return hh + `:` + mm;
  }

  return ``;
};
