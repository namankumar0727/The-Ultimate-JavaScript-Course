//A function inside an object is known as an object

//1st way of creating a method

function work(){
    console.log("Hello ji")
}

const a={
    name:"Naman",
    work
}

console.log(a)
console.log(a.work())

//2nd way of creating a method

const b={
    d:function working(){
        return console.log("Hello ji")
    }
}

console.log(b.d())

