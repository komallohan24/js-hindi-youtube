// var c = 300

let a = 300

if(true){
    let a = 10
 const b =20
//  var c = 30
// console.log("INNER :" , a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array [i];
    
// }

// console.log(a); 
// console.log(b);
// console.log(c);

function one(){
    const username = "komal"

    function  two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "komal"
    if(username === "komal"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++ interesting ++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


console.log(addTwo(5));

const addTwo = function(num){  // ya bhi function but esko kafi time expression bhi bol dia jata ha
    return num + 2
}

