//javascript ka behavioural protyple jab tak use value na mil jaye


function createUser(username ,score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
    this.score++;
}


//this -> jisne ne bhi bulaya hai usko increment kar do


const t = new createUser("tea" ,25)


/*
here's what happen behind new keyword 

*/ 

//to make a method 

let myName = "Anubhav    "






//console.log(myname.trueLength);




let myHeros = ["thor" , "spiderman"]


let heroPower  = {
    thor : "hammer",
    spiderman : "sling" , 
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.anubhav = function(){
    console.log(`anubhav is present in all object`);
}

heroPower.anubhav();




String.prototype.truelength = function(){
console.log(`${this}`);
    
console.log(`true length is : ${this.trim().length} `);
}

let a = "Gupta  "
a.truelength();
"Anubhav   ".truelength();

//Object.setPrototypeOf(kiska , kispe)