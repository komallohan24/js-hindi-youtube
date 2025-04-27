const name = "komal" //one way of declaring string
const repoCount = 50

// console.log(name + repoCount + "Value" );

console.log(`my name is  ${name} and my repo count is ${repoCount}`);

const gameName = new String('komal-lohan') //other method to declare string

console.log(gameName[0]); //access by key value pair
console.log(gameName.__proto__); //access prototype


console.log(gameName.length); //to access methods of prototype
console.log(gameName.toUpperCase()); // to access methods of prototype = inspect consolelist
console.log(gameName.charAt(2)); // check  at which position is which character
console.log(gameName.indexOf('l')); // check which character is at which position 

const newString = gameName.substring(0, 4) // end index value not included and ignores or don't take negative values
console.log(newString);

const anotherString = gameName.slice(-10, 4) //we can add negative values then it will start from reverse
console.log(anotherString);


const newStringOne = "   komal    "
console.log(newStringOne);
console.log(newStringOne.trim()); //to remove unwanted extra characters or space

// more about trim link :
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20' , '-')); //replace %20 with -

console.log(url.includes('komal')); //check whether it include it or not

console.log(gameName.split('-'));
//how to use split link :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split