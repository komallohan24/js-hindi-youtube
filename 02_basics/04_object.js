// const tinderUser = new Object() // this is a singleton object
const tinderUser = {} // this is a non singleton object

 tinderUser.id ="123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname:{
            firstname : "komal",
            lastname : "Lohan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}
// const obj3 ={obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} object is guranteed a target and other obje 1,2,4 act as a source
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign (documentation)

 const obj3 = {...obj1 , ...obj2} // (90% time user this method) spread method
//  console.log(obj3);


 const user = [
    {
    },
    {
    },
    {
    },
 ]

 user[1].email //first value access 
 console.log(tinderUser);

 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser))
 console.log(Object.entries(tinderUser)) // array in array
 
 console.log(tinderUser.hasOwnProperty('isLoggedIn')); //value present ha ya nahi
 