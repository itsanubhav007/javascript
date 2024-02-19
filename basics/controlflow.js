// if

const isUserloggedin =true;


if(isUserloggedin){

}
if(2 == "2")
{
console.log("executed");
}
//2<=2
//< , > , <= , >=, == ,!= ,===


//falsy values
//false , 0 ,-0 , BigInt On , "" , null ,undefined ,Nan

//truthy values
//"0" , "false" , " " , [] ,{} function(){}


const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empt")
}

//false == 0
// false ==  ''
 0== ''


 //Nullish coalescing operator (??) : null undefined

 let val1;
 val1 = 5 ?? 1
 val1 = null ?? 10
 console.log(val1);
 


 var1 = undefined?? 15;
 console.log(val1);

 val1 = null??null??20



 //condition?true:false


 const iceTeaprice = 0
 iceTeaprice>=80 ? console.log("GRETER THAN 80") : console.log("LESS THN 80");