const dateMinus = require('../').dateMinus;

var preDate = (new Date()).setFullYear(2009);
var howlong = dateMinus(preDate);

console.log(JSON.stringify(howlong, null, 2));
