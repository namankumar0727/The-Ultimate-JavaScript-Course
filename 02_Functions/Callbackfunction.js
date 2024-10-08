function a(f){
    const val=1;
    f(val);
}

a(function(val){
    console.log(val)
})