// String doc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const name = "Gautam";
const number  = 50;

/* Methods os string is 
 trim, substring, slice, replace, chartAt, indexOf, includes */

const newname  = new String("Kumar Gupta"); // in this way it makes object
console.log(newname);
console.log(`My nanme is : ${name}`);
// console.log(newname[0]);

const newString  = newname.substring(0,5)
// console.log(newString);

const len  = newname.length
// console.log(len);

const otherString = newname.slice(0,4);
// console.log(otherString);

for(let i=0; i<newname.length; i++){
    // console.log(i, newname[i]);
}

const anotherString = newname.slice(-10,5); // here (start index, last index, increment by 1 by default) 
// say start = start index;
// last = last index
// it return the value which lies in between (start, last) where start included and till last-1.
console.log(anotherString);

console.log("split function",newname.split(" "));
let s = " my name is gautam "
console.log(`trip function is :${s.trim()}`);

console.log(`replace function :${s.replace('gautam', 'Gautam Kumar')}`);