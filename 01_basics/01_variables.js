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
console.log(id);
id=1;
console.log('new id', id); //show error



// const - variables canoot be changed
/* var vs let
1. Scope
var: Function-scoped or globally-scoped (if not inside a function).
let: Block-scoped (limited to the nearest {} block, such as loops, if statements, or functions).

2. Hoisting
var: Is hoisted to the top of its scope, but initialized with undefined (accessible before its declaration, though not recommended).
let: Is also hoisted but not initialized. Accessing it before declaration leads to a ReferenceError (called the "temporal dead zone").

3. Re-declaration
var: Allows re-declaration of the same variable in the same scope.
let: Does not allow re-declaration in the same scope.
*/