const user = {
    username : "anubhav",
    price : 999,
   welcomeMessage : function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);   
}
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()
console.log(this); 

//function chai ()
//{
//    let Username =  "anubhav"
//    //console.log(this.Username);  undefined
//    
//}
//chai()



//const chai = function() {
//    let Username =  "anubhav"
//    console.log(Username);
//}
//chai()

const chai = ()=> {
    let Username =  "anubhav"
    console.log(this);
}

//chai()




//const addtwo = (num1 ,num2)=> (num1 + num2)
//const addtwo = (num1 ,num2)=> 
//{
//    return num1 + num2;
//}
const addtwo = (num1 ,num2)=> ({username : "Anubhav"})

console.log( addtwo(3,4));
//const myArray =[2 ,5, 6, 7, 8];
//myArray.forEach(() => ())