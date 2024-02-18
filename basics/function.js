//console.log("a");
//console.log("n");
//


//
//function SayMyName(){
//    console.log("a");
//    console.log("n");
//    console.log("u");
//    console.log("b");
//    console.log("h");
//    console.log("a");
//    console.log("v");
//}
//SayMyName()
//

//function addTwoNUmbers (number1 ,number2)
//{
//    console.log(number1 +number2);
//}

function addTwoNUmbers (number1 ,number2)
{    let result = number1 +number2;
    return result
}
const result = addTwoNUmbers(1,3);
console.log("result : " ,result);


//function loginUserMessage(username){
//    if(username ===undefined)
//    {console.log("please enter a usermname");
//        return ;
//    }
//    return `${username} roigfj`
//}
//console.log(loginUserMessage("anubhav"));





// *******function and objects**********


// whemn itt kisd used with function then it is called as rest operator when it is used by array then it is called seprat operator

function calculateCartPrice(val1 ,val2 ,...num1)
{
return num1
}
console.log(calculateCartPrice(200 , 400 ,500 ,2000))
const user = {
    username : "hitesh",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
//handleObject(user);
handleObject({
    username:"sam", 
    price:399
})

const mynewarray = [200 ,400 ,100];

function returnSecondValue(getarray)
{
    return getarray[2]
}


console.log(returnSecondValue(mynewarray));



