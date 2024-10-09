//Map is a built in data structure that allows you to store key-value pairs where both the keys and values can be of any data type.It is similar to an object,but with a few key diffenrencies

const map=new Map();

const keyone="string";
const keytwo={};
const keythree=function (){}

map.set(keyone,"Naman")

console.log(map);


map.set(keytwo,{name:"Naman",age:15})

console.log(map)

console.log(map.keys())
console.log(map.values())
console.log(map.entries())
console.log(map.size)
console.log(map.delete(keytwo))

for(let [key,value] of map){
    console.log(`${key}--${value}`)
}