const person={
    name:"John Doe",
    age:30,
    gender:"Male",
    country:"Usa"
};

const {name,age,gender,country}=person

console.log(name)
console.log(age)
console.log(gender)
console.log(country)

//Renaming

const num={x:100,y:200};

const {x:x1,y:y1}=num;

console.log(x1)
console.log(y1)

console.log(x)//It will now throw an error