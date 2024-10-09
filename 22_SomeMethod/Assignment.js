let products=[
    {name:"Checkers",category:"Toys"},
    {name:"Harrypotter",category:"Books"},
    {name:"iPhone",category:"Electronics"},
    {name:"Learn PHP",category:"Books"},
]

console.log(products.some(val=>val.category=="Books"))