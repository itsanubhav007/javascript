let name  = "hello" + "world";
const repocount = 50;
console.log(name + repocount+ "value");
console.log(`hello my name is ${name} and my repo count is ${repocount}`) //`` string interpolation

const gameName = new String('anubhav-gupta');
console.log(typeof gameName);
console.log( gameName);


console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));

const newstring = gameName.substring(0 , 4);
console.log(newstring);

const anotherstring = gameName.slice(0,3);
console.log(anotherstring);



const newstringone = "  hi tesh  "
console.log(newstringone);
console.log(newstringone.trim());


const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20' , '-'))

console.log(url.includes('kdjfhgsj'));
console.log(gameName.split('-')) 