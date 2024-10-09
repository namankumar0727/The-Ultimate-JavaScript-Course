const a=[1,2,21,1,1]

const b=new Set(a)

console.log(b)

b.add(1)
b.add(1)
b.add(1)
b.add(7)
b.add(19)

console.log(b)

console.log(b.has(7))

b.clear()
console.log(b);
