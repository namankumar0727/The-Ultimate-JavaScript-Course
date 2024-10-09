//When we call a for each helper we pass in anonymous callback function 
//this function gets called one time for every element in the array 
//Whatever is inside the functiion that logic happens

const colors=["teal","blue","red","green"]

colors.forEach(()=>console.log("Hello ji"));

colors.forEach((color)=>console.log(color))