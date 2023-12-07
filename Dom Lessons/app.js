// Dom selectors
//1.getElementsByTagName
//h1{} css selector

// document.getElementsByTagName("h1")
// console.log(document.getElementsByTagName("h1").length);






//2. getElementById
//#nameID{} css selector
//document.getElementById("main")

//3. getElementsByClassName
//.className{} css selector
//document.getElementsByClassName("cls")

//4. querySelector

// document.querySelector("h1")
// document.querySelector(".cls")
// document.querySelector("#id-1")

// console.log(document.querySelector("h1"))
// console.log(document.querySelector(".cls"))
// console.log(document.querySelector("#id-1"))
//--------------
// 5. queryselectorall

// console.log(document.querySelectorAll("h1"))
// console.log(document.querySelectorAll(".cls"))
// console.log(document.querySelectorAll("#id-1"))



//Storing data in variables

// const h1 = document.querySelector("h1")

// inner text property

const p = document.querySelector("p");
//console.log(p.innerText);
//console.log(p.textContent);
//console.log(p.innerHtml);

//change text in H1
const h1 =document.querySelector("h1");
h1.innerText = "text changed";
h1.innerHTML = "<em>123</em>";














