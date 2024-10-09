

const a=[1,2,3,34,5,6,7]

let double=a.map(num=>num*2)

console.log(double)


let peoples=[
    {firstname:"Naman",
    lastname:"Kumar"},
    {firstname:"Naman",
    lastname:"Kumar"}
    ]

const answer=peoples.map(person=>{
    return `${person.firstname} ${person.lastname}`})

console.log(answer);