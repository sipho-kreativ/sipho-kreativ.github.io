let dayRef = document.getElementById("day");
let DaysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
let dateToday = new Date ();
let dayToday = dateToday.getDay();
dayRef.innerHTML = `<span>${DaysOfWeek[dayToday]}</span>`;

