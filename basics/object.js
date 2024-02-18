// singleton

const mySym1 = Symbol("key1")

console.log(mySym1)

const Jsuser = {
    name : "anubhav",
    "full name" : "anubhav", 
    age : 18 , 
    [mySym1] : "mykey1",
    location : "jaipur",
    email : "anubhav@gmail.com",
    isloggedIn : false ,
    lastloginDays : ["monday" ,"saturday"]
}
//console.log(Jsuser.email);
//console.log(Jsuser["full name"])
//
//console.log(typeof Jsuser[mySym1]) 
////symbol
//Jsuser.email = "anubhav@chatgpt.com"
//console.log(Jsuser);
////Object.freeze(Jsuser);
//Jsuser.email ="anubhav@microsoft.com" 
//console.log(Jsuser);


//Jsuser.greeting = function(){
//
//    console.log("Hello JS user");
//}
//Jsuser.greetingtwo = function(){
//console.log(`Hello js user , ${this["full name"]}`)
//
//}
//console.log(Jsuser.greeting());
//console.log(Jsuser.greetingtwo());

//const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy"
tinderUser.isLoggedin = false;

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userFullName : {
            firstName : "anubhav",
            lastName : "gupta" 
        }
    }
}
console.log(regularUser.fullName?.userFullName.firstName);
const object1 = {

    1 : "a" , 2 : "b"
}
const obj2 = {
    3 : "a" ,4 : "b"
}
//const obj3  = {object1 , obj2}

const obj4 = {
    5 : "a" ,6 : "b"
}
//const obj3 = Object.assign({} , object1 ,obj2 ,obj4);
//console.log(obj3);
//

const obj3 = {...object1 , ...obj2}
console.log(obj3);


//const users =
//{
//    {
//        id: 1, 
//        email : anubhbv@gmail.com
//    },
//    {
//        
//    }
//}




console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));