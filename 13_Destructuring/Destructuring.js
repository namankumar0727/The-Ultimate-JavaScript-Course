//Destructuring is like unpacking the variables from the data-structures

const a=[12,3,121]

console.log(a[0])
console.log(a[1])
console.log(a[2])

const [x,y,z]=a;

console.log(x)
console.log(y)
console.log(z)

func=()=>{
    return [1,2,3]
}

const [c,,d]=func()
console.log(c)
console.log(d)

const [a1,...b1]=[1,2,31,1,31,4]

console.log(a1)
console.log(b1)