//for

//for (let i = 0 ;i < array.length ;i++) {
//    const element = array[i];
//    
//}



// for of loop
//[{} ,{} , {}]

const  arr = [1 ,2 ,3 ,4 ,5]
for(const val of arr)
{
   console.log(val);
}

//const map = new Map()
//map.set('IN' , 'India')
//map.set('USA' , "United states of america")
//
//map.set('fr' , "france");
//
//for(const [key ,value] of map)
//{
//    console.log(key , ":-" , value);
//
//}

//const myObject = {    
////    'game1'  :NFS , 
////    'game2' : 'spiderman'
////}
////
////for(const [key ,value] of myObject)
////{
////   console.log(key , "-:" ,value); 
//}
//
//const myObject = {
//    js: 'javascript' , 
//    cpp : 'c++',
//    rb : 'ruby' ,
//    swift : "swift by apple"
//}
//
//for(const key in myObject)
//{
//    console.log(`${key} shortcut is for ${myObject[key]}`);
//}
//
//const programming = ["js" , "rb" , "py" , "java"]
//
//for(const key in programming)
//{
//    console.log(key);
//}
//
//
//
const map = new Map()
map.set('IN' , 'India')
map.set('USA' , "United states of america")


// using Nan as map key.




const coding = ["js" , "ruby" , " "];
coding.forEach( function(val)
{
    console.log(val);
})


coding.forEach( (val)=> {
console.log(val);
})


function printMe(item){
    console.log(item);
}

coding.forEach(printMe)


coding.forEach( (item ,index ,arr) => {
    console.log(item , index ,arr);
})


const myCoding  = [
    {
        languageName : "javascript" , 
        languageFileName : "java" , 

    },
    {
        languageName: "cpp",
        languageFileName: "c++"
       
    },
    {
        languageName: "python" , 
        languageFileName  :"python"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})