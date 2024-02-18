

//var c = 300
let a = 300;
if(true){

  let a = 10;
const b = 20;
  console.log("INNER" ,a);

}

console.log(a);
//console.log(b);
//console.log(c);


function one()
{
    const username = "anubhav"
    const website = "google"
    function two() {
        const website ="youtube"
        console.log(username);
    } 
   
    console.log(website);
    //two();
}
//one()


if(true) {
    const username = "hitesh"
    if(true)
       {
        const website = "youtube"
        //console.log(username + website);
       }
       //console.log(website);
}
//console.log(username);

// +++++++ interseting ++++++
const rt = addone(5);
function addone(num){
return num+1;
}

console.log(rt);

const addtwo = function(num){
    console.log(num+2);
    return num+2
}
addtwo(5);

