print=(a,b,c,d)=>{
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
}

const ans=["ja","dsv",'svs','dsvs']

print(...ans)

const ans1=[1,2,3,24]
const ans2=[12,4,214,11]

console.log(ans1.concat(ans2))
console.log(...ans1,...ans2)

//Adding new elements in the array using the spread operator

let peoples=["naman","Yash"]

const allpeople=[...peoples,"padmesh","shubham","prakhar"]

console.log(allpeople)

//The spread operator is also used to do the shallow copy of the objects

const a={
    x:1,
    y:2
}
const a1={
    z:4
}
console.log({...a,...a1,a3:4})