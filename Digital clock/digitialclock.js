let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours(); // display hours of current time
min.innerHTML =(currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();  // display minutes of current time
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();  // display seconds of current time
},1000) //to update time after every second we use setInterval and 1000milisec that means 1sec
//  (currentTime.getHours()<10?"0":"") if conition to add 0 if there is a single number
