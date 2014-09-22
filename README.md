## format-date

Takes a string and a date object, returns what you expect

Example:

```js
var formatDate = require('format-date')

formatDate('{month}/{day}/{year}', new Date);
// => 21/09/2014

formatDate('{hours}:{minutes}:{seconds} {day-name}', new Date);
// => 13:30:53 Monday

formatDate('{month-name} {year}', new Date)
// => January 2014
```

## Install

```bash
$ npm install format-date
```

## Reference

* day
* day-name
* month
* month-name
* year
* hours
* minutes
* seconds
