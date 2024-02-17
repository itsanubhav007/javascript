// # Primitive

/* 7 ypes : String , NUmber , Boolean ,null ,
 undefined , Symbol  , BigInt */

 

//dynamically typed;
 // Refrence type (Non - primitive)
// Array , Objects , Functions 
const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id == anotherId)

const heroes = ["saktiman" , "naagraj" , "doga"]

let myObj = {
 name : "hitesh", 
 age : 22,
}

const myFunction = function()
{
    console.log("hello world");
}
console.log(typeof myFunction);