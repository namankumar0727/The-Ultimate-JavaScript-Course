const songs=[
    {name:"hello",singer:"jass",duration:4.32},
    {name:"hello1",singer:"jass1",duration:4.21},
    {name:"hello2",singer:"jass2",duration:2.21},
    {name:"hello3",singer:"jass3",duration:1.24},
    {name:"hello4",singer:"jass4",duration:5.32},
]

const [, , {singer:s}]=songs

console.log(s)