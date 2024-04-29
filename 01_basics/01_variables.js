const id = 123;
let name = "gautam";
var subject = "maths";
marks = 85;

let roolno;

//id = 1230; // we cannot modify the const variable
console.log(id);


// we cannot use var, beacuse of issue in block scope and fuctional scope.
// in Let this problem as been solved.


// if we not assign the value then it assign the undefined as value
console.table([name, id, subject, marks, roolno]);