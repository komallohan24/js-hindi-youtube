// array : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// when we apply copy operation on array it create shallow copies
// what is shallow coopy :https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
// what is deep copy : http://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1]); // values can be access by 0 index

// array methods

// myArr.push(6) // to add the element
// myArr.push(7)
// myArr.pop() //removes the last value

// myArr.unshift(9) // add value into starting of array which create problem that is to shift all the values of array
// myArr.shift() // remove the first element of array


// console.log(myArr.includes(9)); // check whether array includes 9 or not
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice , splice

console.log("A" , myArr);

const myn1 = myArr.slice(1, 3) // its icludes 1st 2nd but not include 3rd 

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1, 3) // it icnludes 1 to 3 elements even 3 and splice portion get split from array
console.log("C" , myArr);
console.log(myn2);