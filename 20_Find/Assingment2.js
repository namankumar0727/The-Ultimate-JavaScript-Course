let products=[
    {name:"Checkers",category:"Toys"},
    {name:"Harry potter",category:"Books"},
    {name:"Iphone",category:"Electronics"},
    {name:"Learn PHP",category:"Books"},
]

finder=(val)=>{
    return val.category=="Books"
}

console.log(products.find(finder))