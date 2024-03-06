function init(){
    let name ="mozilla"
    function displayname(){
        console.log(name);
    }
    displayname();
}
init();
/* function jab bhi function return 
karta hai toh jo function vo 
return kar raha hota hai uska lexical scope matlab 
ki pura upar wala function bhi return ho jata hai.*/

function makeFunc(){
    const name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc();
//clickhandler kuch return karega varna pta kaise fir uske bad jab onclick call hoga tab wo chiz chalegi 

function clickHandler(color){
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}


document.getElementById('orange').onclick = clickHandler("orange");




