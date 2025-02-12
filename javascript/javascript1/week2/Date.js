function getEventWeekday(n){
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let todayIndex = new Date().getDay();
let futureDay =(todayIndex + n) % days.length;

return days[futureDay];
};



// With todays weekday a tuesday
console.log(getEventWeekday(3)); // Logs out "Thursday"

// With todays weekday a Friday
// console.log(getEventWeekday(2)); // Logs out "Sunday"