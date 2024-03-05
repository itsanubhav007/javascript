const user  = {
    username  : "anubhav" , 
    loginCount : 8,
    signedIn: true , 

    getUserdetails : function(){
        console.log(this);
    }
}//object literal


console.log(user.username);
console.log(user.getUserdetails());

//const promiseOne = new Promise()
//const date = new Date()

function User(username , logincount , isloggedincount)
{
    this.username = username;
    this.loginCount = logincount;
this.greeting = function(){
    console.log(`user ${this.username}`);
}
   
}
//ek empty object generate hoga jise parnthesis bola jata hai

const userone = new User("anubhav" , 12);
console.log(userone.constructor);
//constructor property khud hi bare me refrence



//instanceof






