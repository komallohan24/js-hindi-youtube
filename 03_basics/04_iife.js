// Immediately Invoked function expressions (IIFE)

(function chai(){
    //  named IIFE
    console.log(`DB  connected`);
    })();

    ( (name) => {
        // unnamed IIFE
        console.log(`DB CONNWCTWD TWO  ${name}`);
        
    })(`komal`)