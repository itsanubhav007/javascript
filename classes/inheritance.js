class user {

    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`username${this.username}`);
    }
}


class teacher extends user{

    constructor(username,email ,password)
    {   super(username)
        this.email = email;
        this.password = password

    }


    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai = new teacher("chai" , "chai@gmail.com" ,"123")
console.log(chai);

const t = new user("anubhav");
console.log(t);


console.log(chai instanceof teacher);
console.log(chai instanceof user);
console.log(t instanceof teacher);
