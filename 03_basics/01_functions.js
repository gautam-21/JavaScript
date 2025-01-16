// this is the function defination
function add (num1, num2){   // num1,num2 is called parameters 
    console.log(num1 + num2);
    
}

// this is called the function reference
add

// this is called the function execution
add (3, 4) // here it called arguments or value

//suppose if we does not pass the value then we get the "undefine"
function logedin(username){
    console.log(`${username} is logined !!`);
}

logedin('gautam') // value is pass  (output: gautam is logined !!)
logedin()  // value is not pass   (output : undefined is logined !!)