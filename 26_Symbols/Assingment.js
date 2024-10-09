const sym1=Symbol("foo")

console.log(typeof sym1)

const obj={}

obj[sym1]="asjkcna"

console.log(obj)

for(let i in obj){
    console.log(i)
}