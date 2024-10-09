//THe some method tests whether at least one element in the array passes the conditiion specified bu the provided callback function. It returns true if the callback function return true for at least one element and false if no element passes the condition


const a=[
    {id:1},
    {id:22},
    {id:3},
    {id:4},
]

console.log(a.some((val)=>val.id==2))
