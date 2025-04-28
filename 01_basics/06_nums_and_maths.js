const score = 400
// console.log(score); //automatically define number type

const balance = new Number(100) // deliberately define a number
// console.log(balance); //specifically cast that it is number

// console.log(balance.toString().length); //type of become a string output will be in number but or .length is the propertty of string
// console.log(balance.toFixed(2)); //fixed digits after decimal 

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // use commas according to US standards
// console.log(hundreds.toLocaleString('en-IN')); //according to indian or number system

//++++++++++++++++ Maths +++++++++++++++++(maths is javascript library by default)

// console.log(Math);
// console.log(Math.abs(-4)); //absolute value help in just changing signs (-ve values convert into +ve)
// console.log(Math.round(4.3)); // round off the values
// console.log(Math.ceil(4.2)); // to select the top value or greater integer
// console.log(Math.floor(4.9)); //select the bottom value or  small integer
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random()); //value always lie between 0 and 1
console.log(Math.random()*10 ); // value shift left
console.log(Math.random()*10 + 1); //avoide zero minimum value will be 1
console.log(Math.floor(Math.random()*10) + 1); // to avoid bodmas rule take the random*10 into a bracket

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);