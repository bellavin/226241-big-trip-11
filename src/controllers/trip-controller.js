import {formatDate} from '../utils/utils';
import {sortType} from '../utils/utils';


export default class TripController {
  constructor(points) {
    this._points = points;
    this._sortType = sortType;
  }


  _sortPoints() {
    return [...this._points].sort(this._sortType.BY_DATE);
  }


  _getDays(points) {
    const days = new Set();
    points.forEach((it) => {
      days.add(formatDate(it.dateFrom));
    });
    return days;
  }


  getTrip() {
    const points = this._sortPoints();
    const days = this._getDays(points);
    const tripDays = [];

    days.forEach((day) => {
      return tripDays.push({
        day,
        points: []
      });
    });

    tripDays.forEach((tripDay) => {
      points.forEach((point) => {
        if (tripDay.day === formatDate(point.dateFrom)) {
          tripDay.points.push(point);
        }
      });
    });

    return tripDays;
  }
}
