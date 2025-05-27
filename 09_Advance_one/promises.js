// //promise is created
// const promiseOne = new Promise (function(resolve, reject){
//     //async opertion
//     // db call etc
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve(); // by this the promise is connected with then

//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log('Promise is consumed');
// })

// //2nd way to write this

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('async task2 is complete');
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log('promise 2 is consumed');
// })

// // 3rd way

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({"username":"gautam kumar", "email":"abc@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log('user --', user);
    
// })

// // 4th way

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({"username":"gautam", 'email':'gautam@gmail.com'})
//         }
//         else{
//             reject('ERROR:Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user) =>{
//     console.log("user", user);
//     return user.username;
// }).then((username) =>{
//     console.log('username ', username);
    
// }).catch((error) => {
//     console.log("error ", error);
// }).finally(()=>{
//     console.log('The promise is either resolved or rejected ');
// })

//5th way
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({"username":"Gautam", "Password":"123456"})
        }
        else{
            reject('Error : Something went wrong')
        }
    },1000)
});

// As async function canot handle error at its own , so when error = true
// it get error---- 
/** 
node:internal/process/promises:288
            triggerUncaughtException(err, true /* fromPromise 
            

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without 
a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error : Something went wrong".] {
  code: 'ERR_UNHANDLED_REJECTION'
}

*/

async function consumePromiseFive(){
    const response = await promiseFive
    console.log("response ", response);
    
}

// using try catch block

async function consumePromiseTryCatch(){
    try {
        const response = await promiseFive;
        console.log('response', response);
        
    } catch (error) {
        console.log('error ', error);
        
    }
}

// consumePromiseFive();

consumePromiseTryCatch();


// Note - fetch

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.