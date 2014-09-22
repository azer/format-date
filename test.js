var format = require("./");
var test = require("prova");
var date = new Date(1411358832845);

test('day month and year', function (t) {
  t.plan(1);
  t.equal(format('{day} / {month} / {year}', date), '21 / 09 / 2014');
});

test('day-name month-name and short-year', function (t) {
  t.plan(1);
  t.equal(format('{month-name} {day}, {day-name}', date), 'September 21, Sunday');
});

test('hours, minutes and seconds', function (t) {
  t.plan(1);
  t.equal(format('{hours}:{minutes}:{seconds}', date), '21:07:12');
});
