//Function destructuring in the js

function print({name,age,country}){

    console.log(`${name}`)
    console.log(`${age}`)
    console.log(`${country}`)

}

const person={
    name:"Naman",
    age:20,
    country:"India"
}
print(person);


//Renaming of the function destructuring

let options={
    title:"My menu",
    items:["items1","items2"]
}

function showmenu({title,w:width=100,items}){
    console.log(`${title}`)
    console.log(`${width}`)
    console.log(`${items}`)
}

showmenu(options)