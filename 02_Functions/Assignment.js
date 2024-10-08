function showCallFunc(fn){
    const val=10;
    fn(val);
}

showCallFunc((val)=>{
    console.log(val);
})

console.log(showCallFunc)