const li=document.getElementsByTagName('li')[0]

console.log(li.parentElement)
console.log(li.parentElement.parentElement)
console.log(li.parentElement.parentElement.parentElement)

const ul=document.querySelector("ul")

console.log(ul.children)
console.log(ul.children[0])
console.log(ul.children[1])
console.log(ul.children[2])

console.log(ul.parentElement.children)

console.log(li.nextElementSibling)
console.log(li.previousElementSibling)