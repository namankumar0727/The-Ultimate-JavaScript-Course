const a=[1,2,3,4,5]

const b=a.reduce((p,c)=>{
    return p+c
},0)

console.log(b)

const people=[
    {name:"Naman",age:19},
    {name:"Naman2",age:21},
    {name:"Naman3",age:24}

]

console.log(people.reduce((p,c)=>c.age>p?c.age:p,0))

