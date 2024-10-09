const a=[
    {name:"Naman",age:15},
    {name:"Yash",age:16},
    {name:"Padmesh",age:17},
    {name:"Prakhar",age:18},
    {name:"Shubham",age:19},
]

console.log(a.find(person=>person.name=="Yash"))

const posts=[
    {id:1,content:"Good post"},
    {id:2,content:"Better post"},
    {id:3,content:"Best Post"},
    {id:2,content:"Better post"}

]

console.log(posts.find(post=>post.id==2))