//array

const myArr = [0,1,2,3,4,5 ,true ,"anubhav"]

console.log(myArr[0]);

const myHeros = ["shaktiman" , "naagraj"]



const myArr2 = new Array(1,2,3,4)
//Methods
myArr.push(6)
//console.log(myArr);
//myArr.push(7)


myArr.unshift(9);

//myArr.shift();
//console.log(myArr);

console.log(myArr.includes(9));
//
//console.log(myArr.indexOf(3));
//
//const newArr = myArr.join()
//console.log(myArr);
//console.log(newArr);

//slice , plice

console.log("A" ,myArr);

const myn1 = myArr.slice(0,3)

console.log(myn1);
console.log("B " ,myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2);
console.log("C " ,myArr);

const marvelHeroes = ["thor" , "spiderMan" , "IronMan"]
const dc = ["superman" , "flash" , "batman"]

//marvelHeroes.push(dc);
//console.log(marvelHeroes);
//const allHeroes = marvelHeroes.concat(dc)
//console.log(marvelHeroes)
//console.log(allHeroes);

//const all_new_heroes = [...marvelHeroes,...
//dc]
//console.log(all_new_heroes);
//const another_Array = [1 ,2 ,3 , [4 , ,5 ,6] ,7 , [6 , 7 ,[4 ,5]]];
//const real_another_array = another_Array.flat(Infinity)
//console.log(real_another_array);
//console.log(Array.isArray("Hitesh"));
console.log(Array.from("Anubhav"));
console.log(Array.from({name : "anubhav"})); // **interesting**

let score1 =100
let score2  = 200
let score3 = 300
console.log(Array.of(score1 ,score2 ,score3));