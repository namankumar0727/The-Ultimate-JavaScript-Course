//The for in loop in the js is used to iterate over the enumberable properties of an object .It is  a way to loop through the keys

const a={
    name:"Naman",
    age:19
}

for(let keys in a){
    console.log(keys,a[keys]);
}

const list=['1','2','3','4','5']

for(let keys in list){
    console.log(`${keys} ${list[keys]}`);
}