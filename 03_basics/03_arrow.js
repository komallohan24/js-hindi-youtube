const user = {
    username: "koaml",
    price: 99 ,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "komal"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "komal"
//     console.log(this.username);
    
// }


// const chai = () => { // arrow function : remove function keyword and use => between parathesis and brackets
//     let username = "komal"
//     console.log(this);
    
// }

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2
// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) =>  ({username : "komal"})

console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => ())