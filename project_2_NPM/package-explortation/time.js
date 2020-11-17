let timeNow = new Date();
console.log(timeNow);
const moment = require('moment');
let formattedTimeNow = moment().format('MMMM Do, YYYY')
console.log(formattedTimeNow);