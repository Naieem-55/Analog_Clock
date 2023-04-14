let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();

    //getting hours , minutes , seconds from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hourRotation = 30*hh + mm/2;
    let minuteRotation = 6*mm;
    let secoundsRotation = 6*ss;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minuteRotation}deg)`;
    sec.style.transform = `rotate(${secoundsRotation}deg)`;
}

setInterval(displayTime, 1000);

