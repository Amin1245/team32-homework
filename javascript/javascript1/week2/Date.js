function getEventWeekday(n){
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let todayIndex = new Date().getDay();
let futureDay =(todayIndex + n) % days.length;

return days[futureDay];
};




console.log(getEventWeekday(3));