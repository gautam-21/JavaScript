function setUsername (useranme){
    //Complex db call
    this.useranme = useranme;
}

function createUser(username, email, password){
    /* this ----> A list of arguments to be passed to the method.

    .call ---> Calls a method of an object, substituting another object for the current object.  */
    setUsername.call(this, username)  
    this.email = email;
    this.password = password;
}

const user = new createUser('Gautam', 'abc@gmail.com', '123456')
console.log(user);
