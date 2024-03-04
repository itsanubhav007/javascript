// queue  me lag chuka hai par abhi pura nahi ho sakta bad me hoga.

//fetch('').then().catch().finally(); 

// Q and blue bird

const promiseOne = new Promise(function(resolve ,reject){

    //Do an async task
    //Db task , calls ,cryptography
     

    setTimeout(function(){
     console.log('Async');
     resolve()
    } , 1000);

}) //promise ko banana

promiseOne.then(function()
    {
console.log("Promise consumed");
    }) //resolve ka connection .then ke sath




new Promise(function(resolve , reject){
    setTimeout(function (){
console.log("Async task 2");
resolve();

    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve ,reject) {

setTimeout(function (){
   resolve({username : "anubhav" , email : "anubhav22717@gmail.com"})
} ,1000);

})
promiseThree.then(function(user){
 console.log(user);
})






const promiseFour = new Promise(function(resolve , reject){

setTimeout(function(){
let error = true;
if(!error){
    resolve({username : "anubhav"  , password : "123"})
}
else{
    reject('Error : something went wrong');
}
} , 1000)


})

promiseFour
.then((user)=>{
console.log(user);
return user.username
})
.then((username)=>{
console.log(username);
})
.catch(function(error){
console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected finally"));





const promiseFive =  new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "javascript"  , password : "123"})
        }
        else{
            reject('Error : js went wrong');
        }
        } , 1000)
});



async function consummePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
//
//
consummePromiseFive()
//
//async function getAllUsers(){
//try{
//const response = await fetch('http')
//const data = await response.json();
//console.log(data);
//}catch(error){
//    console.log("E : " , error);
//}
//
//}
//
//getAllUsers()
//
//


fetch('https://api.github.com/users/itsanubhav007')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))







