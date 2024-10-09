//Iterate over object and log the peoperty and the value of that object using the for in loop

const object={a:1,b:2,c:3};

for(let i in object){
    console.log(`${i} ${object[i]}`)
}