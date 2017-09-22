# date-minus
Date minus by pure javascript.

## Usage

### call the function

```js
const dateMinus = require('./').dateMinus;
var preDate = (new Date()).setFullYear(2009);
var howlong = dateMinus(preDate);
```

### output

```json
{
  "years": 8,
  "months": 0,
  "days": 0,
  "hours": "00",
  "minutes": "00",
  "seconds": "00",
  "passed": true, // date相对current为过去时间(date is earlier than current.)
  "date": "2009-09-22T15:52:28.861Z",
  "current": "2017-09-22T15:52:28.862Z"
}
```

## Parmeters

### input

| 参数名	| 类型 |	默认值 |	备注 |
| date | Date/Number |	当前时间 |	减数 |
| current |	Date/Number |	当前时间 |被减数 |
