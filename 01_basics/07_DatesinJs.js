// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://tc39.es/proposal-temporal/docs/index.html 

// dates

let myDate = new Date() // date ka object or instance is created and show current date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025 , 0 , 29) // month start from 0 in js
// console.log(myCreatedDate.toDateString()); // show date passed in object

// let myCreatedDate = new Date(2025 , 0 , 29 , 5 , 3)
// console.log(myCreatedDate.toLocaleString());
 
// let myCreatedDate = new Date("2025-01-19") // yy-mm-dd
 let myCreatedDate = new Date("01-14-2025") // mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

//  console.log(myCreatedDate.getTime());
//  console.log(Date.now()/1000); // to  convert milliseconds into seconds 
//  console.log(Math.floor(Date.now()/1000));
 
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()}` and the time

newDate.toLocaleString('default' ,  {
    // press ctrl+space to see the properties
    weekday: "long", //press ctrl+space
})