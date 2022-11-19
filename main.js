import { DayWeek } from './dayweek.js' 

const dayNew = new DayWeek('01', '01', '1900')
const dayNew2 = new DayWeek('07', '03', '1997')

console.log(dayNew.dayofweek());
console.log(dayNew2.dayofweek());