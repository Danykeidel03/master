const moment = require("moment");

const customDate = moment("2025-02-24", "YYYY-MM-DD");

console.log(customDate.format());

const customDate2 = moment([2025, 1, 24]);

console.log(customDate2.format("YYYY-MM-DD"));

const customDate3 = moment("24-02-2024", "DD-MM-YYYY");

const customDate4 = moment(175654654);

console.log(customDate4.format("YYYY-MM-DD HH:mm:ss"));

customDate.add(7, 'days')
customDate.subtract(1, 'month')
customDate.add(7, 'days')

console.log(customDate.format());

customDate.set('month', 5)

console.log(customDate.isAfter(customDate2))
console.log(customDate.isBefore(customDate2))
console.log(customDate.isSame(customDate2))

//diferencia en dias

console.log(customDate.diss(customDate2, 'days'))
