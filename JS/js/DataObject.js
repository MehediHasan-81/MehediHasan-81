const Anniversary = new Date('June 20, 2023 00:00:00'); 
const dayOfWeek = Anniversary.getDay();


function getDayOfWeekString(dayOfWeek) { 

    const Today = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

return Today[dayOfWeek]; 

}

console.log("Anniversary " + getDayOfWeekString(dayOfWeek));
