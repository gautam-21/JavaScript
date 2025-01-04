// let arr = [1,2,3,4]
// console.log('array is ', arr);
// arr.unshift(9)
// console.log('new array is ',arr );

// let arr = [1,2,3,4]
// console.log('array is ', arr);
// arr.shift()
// console.log('new array is ',arr );

// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());


let num = [1,2,3,4,5,6];
console.log('original array : ', num);
//slice - original array is not chnage and in this range i.e: [start,end)
let arr1 = num.slice(1,3);
console.log('new array through slice : ', arr1);
console.log('original array after slice: ', num);

//splice - original array get modified and range [start,end]
let arr2 = num.splice(1,3);
console.log('new array through splice : ', arr2);
console.log('original array after splice: ', num);


