// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value) 

const a = document.querySelector("a")
const input = document.querySelector("input")

// console.log(a.href = 'www.youtube.com')
// console.log(input.value)
// console.log(input.type)

console.log(input.getAttribute('type'))

//setAttribute

input.setAttribute('placeholder', "password")

