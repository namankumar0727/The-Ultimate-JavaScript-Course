const array=[1,2,23,2,34]

let sum=0;

 function adder(number){
    sum+=number;
 }

array.forEach(adder)

console.log(sum)