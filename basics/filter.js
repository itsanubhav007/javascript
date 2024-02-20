const myNumbers = [1, 2 ,3 ,4 ,5 ,6 , 7 ,9]

const neNums = myNumbers.map(  (num) => num+10 )

const NewNUms = myNumbers.map((num) => num*10)
                         .map((num) => num+1)
                         .filter((num) => num>=40)
                         
console.log(NewNUms);

