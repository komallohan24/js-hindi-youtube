// singleton (when made from constructor)
//  Object.create

// object literals

const mySym = Symbol("key1") //mathod to declare a symbol

const JsUser = {
    name : "komal",
    "full name" : "komal lohan" ,
    [mySym] : "mykey1" , // here datatype is not  symbol but string until u write it in []
    age : 23,
    location : "jind",
    email : "komal@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email); // not right way to access object there is a another way
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "komal@chatgpt.com" 
// Object.freeze(JsUser) //nobody can change values now
JsUser.email = "komal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    }
JsUser.greetingTwo = function(){
        console.log(`Hello Js User , ${this.name}`);
        }

    console.log(JsUser.greeting());
    console.log(JsUser.greetingTwo());