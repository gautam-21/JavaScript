

// Immediately Invoked Function Expressions (IIFE)

// ()()  //here 1st () is where we write the function definition and 2nd one is used for execution



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
