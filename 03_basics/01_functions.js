// this is the function defination
function add(num1, num2) {
  // num1,num2 is called parameters
  console.log(num1 + num2);
}

// this is called the function reference
add;

// this is called the function execution
add(3, 4); // here it called arguments or value

//suppose if we does not pass the value then we get the "undefine"
function logedin(username) {
  console.log(`${username} is logined !!`);
}

logedin("gautam"); // value is pass  (output: gautam is logined !!)
logedin(); // value is not pass   (output : undefined is logined !!)

// in this we delacre the default value
function user(username = "INDIA") {
  console.log(`${username} is logined !!`);
}

user("gautam"); // value is pass  (output: gautam is logined !!)
user(); // output: INDIA is logined !!  (here default value is taken as we have not pass any argument in  function call)

// rest operator
function sum(...num) {
  console.log("numuber are : ", num);
}
sum(1, 2, 3); //output: numuber are :  [ 1, 2, 3 ]

//handaling the objects
const user_object = {
  username: "hitesh",
  price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user_object)
// handleObject({
//   username: "sam",
//   price: 399
// })
