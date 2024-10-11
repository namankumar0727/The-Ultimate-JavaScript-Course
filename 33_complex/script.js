//creating an element in the javascript

const h1=document.createElement('h1')

console.log(h1)

h1.textContent="Naman kumar"

const body=document.querySelector('body')

body.appendChild(h1)


const ul=document.createElement('ul')

const li=document.createElement('li')

li.innerText="akvjsvnskvs"
body.appendChild(ul)
ul.appendChild(li)

//insertbefore is insert what and where

ul.insertBefore(li,h1)

//insetadjacentElement just adds adjacent to

//Append will append the element at the end of the list

//prepend will append the element at the starting of the list

