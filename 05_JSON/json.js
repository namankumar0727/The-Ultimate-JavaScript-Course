const person={
    "name":"Naman",
    "id":1,
    "email":"kjvnn",
    "hobbies":[1,2,31,31],
    "address":{
        city:"fbd"
    }
    
}

//JSON.stringify
const ans1=JSON.stringify(person)
const ans=JSON.parse(ans1)
console.log(ans1)
console.log(ans)
