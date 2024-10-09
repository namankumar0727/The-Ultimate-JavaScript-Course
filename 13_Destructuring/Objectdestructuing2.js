//Object destructuring with the rest operator

let {a,b,...c}={
    a:1,
    b:1,
    c:1,
    d:1,
    e:1,
}

console.log(a)
console.log(b)
console.log(c)