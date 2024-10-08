console.log(Date());

const a=new Date()

console.log(a)

const a1=new Date(2024,4,14,2,3,2,1)

console.log(a1)

const a2=new Date(2024,6,28)

console.log(a2)

const a3=new Date();

console.log(a3.getFullYear())
console.log(a3.getMonth())
console.log(a3.getDay())
console.log(a3.getUTCDay())
console.log(a3.toDateString())

a3.setDate(a3.getDate()+1)

console.log(a3.toLocaleDateString())


setInterval(()=>
console.log("Hello ji"),1000)

setTimeout(()=>{
    console.log("svns")
},2000)


const interval=setInterval(()=>
console.log("hello hello"),3000)

setTimeout(()=>{
    clearInterval(interval);
},5000)
