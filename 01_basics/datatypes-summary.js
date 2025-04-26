// Primitive

// 7 types : String , number, null, boolean, undefined, symbol (to make a value unique),BigInt

const score = 100 // come under number category
const scorevalue = 100.3 // come under number category

const isLoggedIn = false //boolean type
const outsideTemp = null // completely empty
let userEmail; // value undefined

const id = Symbol('123') // symbol type
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 2345677878989687n // datatype bigInt and n represent bigInt or bignumber



// Refernce type (Non-Primitive)

// Array, objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"]; //type array
let myObj = {
    name: "komal",  
    age: 23,                              
} // type object , values should in key pairs , always use {}

 const myFunction = function(){
    console.log("Hello world")
 }  // type function datatype

 console.log(typeof bigNumber );
 console.log(typeof outsideTemp);
 console.log(typeof scorevalue);
 console.log(typeof myFunction);
  
 // study for intervier 13.5.3 link:
 // https://tc39.es/ecma262/#sec-typeof-operator


 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // stack(Primitive), heap(non-primitive)

 let myYoutubename = "komalchaudharydotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email: "user@google.com" ,
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "komal@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 