export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


const addZero = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatDate = (date) => {
  let yy = new Date(date).getFullYear();
  let mm = new Date(date).getMonth() + 1;
  let dd = new Date(date).getDate();
  mm = addZero(mm);
  dd = addZero(dd);
  return `${yy}-${mm}-${dd}`;
};


export const formatDate2 = (date) => {
  let yy = new Date(date).getFullYear();
  let mm = new Date(date).getMonth() + 1;
  let dd = new Date(date).getDate();
  yy = String(yy).slice(2, 4);
  mm = addZero(mm);
  dd = addZero(dd);
  return `${dd}/${mm}/${yy}`;
};


export const formatDate3 = (date) => {
  const monthNames = [`JAN`, `FEB`, `MAR`, `APR`, `MAY`, `JUN`, `JUL`, `AUG`, `SEPT`, `OCT`, `NOV`, `DEC`];
  let mm = new Date(date).getMonth();
  let dd = new Date(date).getDate();
  mm = monthNames[mm];
  dd = addZero(dd);
  return `${mm} ${dd}`;
};


export const formatTime = (date) => {
  let hh = new Date(date).getHours() % 12;
  let mm = new Date(date).getMinutes();
  hh = addZero(hh);
  mm = addZero(mm);
  return `${hh}:${mm}`;
};
