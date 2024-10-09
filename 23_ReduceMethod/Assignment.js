const a=[12,33,432,42]

calculateProduct=(a)=>{

    return a.reduce((p,c)=>p*c);
}


console.log(calculateProduct(a));