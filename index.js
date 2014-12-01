var format = require("format-text");
var leftpad = require("left-pad");
var days = require("days");
var months = require("months");

module.exports = formatDate;

function formatDate (template, date) {
  if (!date) date = new Date;

  return format(template, {
    day: leftpad(date.getDate(), 2, '0'),
    month: leftpad(date.getMonth() + 1, 2, '0'),
    year: date.getFullYear(),
    hours: leftpad(date.getHours(), 2, '0'),
    minutes: leftpad(date.getMinutes(), 2, '0'),
    seconds: leftpad(date.getSeconds(), 2, '0'),
    'day-name': days[date.getDay()],
    'month-name': months[date.getMonth()],

    // utc
    'utc-day': leftpad(date.getUTCDate(), 2, '0'),
    'utc-month': leftpad(date.getUTCMonth() + 1, 2, '0'),
    'utc-year': date.getUTCFullYear(),
    'utc-hours': leftpad(date.getUTCHours(), 2, '0'),
    'utc-minutes': leftpad(date.getUTCMinutes(), 2, '0'),
    'utc-seconds': leftpad(date.getUTCSeconds(), 2, '0'),
    'utc-day-name': days[date.getUTCDay()],
    'utc-month-name': months[date.getUTCMonth()]
  });
}
