// let firstFavNumb = 36;
// let secondFavNumb = 14;
// console.log(firstFavNumb > secondFavNumb);
// console.log(firstFavNumb < secondFavNumb);
// console.log(firstFavNumb >= secondFavNumb);
// console.log(firstFavNumb <= secondFavNumb);
// console.log(firstFavNumb === secondFavNumb);
// console.log(firstFavNumb == secondFavNumb);
// console.log(firstFavNumb !== secondFavNumb);
// console.log(firstFavNumb != secondFavNumb);

// let favActorFirstName = "Timmy ";
// let favActorLastName = "Jones";

// let fullActorName = favActorFirstName.concat(favActorLastName);

// let uppercase = fullActorName.toUpperCase();
// let message = 'My favorite actor is ' + uppercase + 'noodle boodlle';
// console.log(message += ' best show is nothing more than ' + fullActorName    );


// let password; 

// if (password === 8) {
//     console.log('Welcome!'); 
// } else if (password <= 8 ){
//     console.log('Password must be at least 8 characters');
// } else if (password >= 8){
//     console.log('Password is too long and should be at least 8 characters');
// } else {console.log('Please enter a valid password')}


// let x = 1
// let text;


// switch (x) {

//     case 0:
//         text = "off"
//         console.log(text);
//         break;
//     case 1:
//         text = "On"
//         console.log(text);
//         break;
//     default:
//         text = 'no value found';
//         console.log(text);
    
// }


// let fruit = "banana";

// switch (fruit){
//     case "banana":
//         text = "Banana is good to eat";
//         console.log(text);
//         break;
//     case "Orange":
//         text = "I am not a fan of orange";
//         console.log(text);
//         break;
//     case "Apple":
//         text = "How you like them apples";
//         console.log(text);
//         break;
//     default:
//         text = "tf is that?";
//         console.log(text);
// }

// for ( let i = 0; i <= 15; i++){
//     console.log("What it do", i);
// }


// let name = "timmy";

// for ( let i = 0; i <= 15; i++){
//     console.log(name, i)
// }


// let i = 1;

// while (i <= 5){
//     console.log("what does it does  you know");
//     i++
// }
//  let i = 10;

//  while (i <= 100){
//     console.log("e");
// i++

//  }


// let i = 1;

// do {
//     console.log("hellllll", i);
//     i++;
// } while (i <= 5);

// let i = 20

// do {
//     console.log("hellllll", i);
//     i++
// } while ( i <= 400);


// const fruits = [
//     'apples',
//     'bananas',
//     'mango',
//     'pinapple',
// ]

// console.log(fruits.length)
// fruits.pop;


// Objects

// const person = {
//     key: value
// }


// const person = {
//     firstName: "Hugo",
//     lastName: "Bosded",
//     age: 19,
//     location: ['plant', 'Earth'],
//     isProgrammer: true,
// };

// console.log(person)

// //accessing object

// //dot notation
// console.log(person.age);

// //bracket notation needs quotes in brakcets
// console.log(person["location"]);

// //add object
// person.middleName = "Banana";
// console.log(person)
// //delete from object
// delete person.middleName
// console.log(person)



// const car = {
//  type: "dodger",
//  model: "itsa",
//  color:"green",
// }

// console.log(typeof car);
// car.type ='Toyota';
// console.log(car);
// car.wheels = "hot Wheels"
// console.log(car)

// function greet() {
//     console.log('Hello from the inside');
// }

// greet();

// // use ` for console log
// function sayHello(name){
// console.log(`Hello ${name}`);
// }

// sayHello("Baby boo");

// function add(x ,y){
//     return x + y;
// }

// const res = add(10,20);

// console.log(res);

// Call back function

// example 1



// function firstLevel(f1){
//     const value = 100;
//     f1(value);
// }

// firstLevel(function(value){
//     console.log(value);
// });


// // example 2



// function doggy(name, retrieved){
//     console.log(`Woof doggy ${name}`);
//     retrieved();
// }

// function retrieved(){
//     console.log(' I fetched a bone')
// }

// doggy("Sparky", retrieved)





// // method

// const person = { 
//     name:"HuXn",
//     age: 19,
//     greet: function (){
//         return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
//     },
// };


// //JSON

// const person2 = {
//     "name": "john doe",
//     "age": 20,
//     "email": "john@mail.com",
//     "isSubscribed": true,
//     "hobbies": ["Reading", "Running", "Cooking"
//     ],
//     "address": {
//         "city": "New York",
//         "state": true
//     }
// }
// console.log(JSON.stringify(person2))

//Date and Time


// const currentDate = new Date()


// console.log(currentDate)


// // set interval

// setInterval()


//arrow functions

// function greet(username){
//     return `Hello ${username}`;
// }
// console.log(greet("pooty"))


// vs 

// greet = (username)  => {
//     return `Hello ${username}`;


// rewriting arrow functions

// function greet(username) {
//     return `Hello ${username}`;
// }

// ways to type arrow functions
// greet0 = (username, username2) => {
//     argument1
//     argument2
//     return argument complete

// }
// greet = username => `Hello ${username}`;
// const greet2 = username => `Hello ${username};



// console.log(greet("billy"));



// another arrow function example if empty just put ()

//const double = n => n * 2;


// challenge arrow functions

// setTimeout(() => {
//     console.log("hello");
//     setTimeout(() => {
//         console.log("Hey");
//         setTimeout(() => {
//             console.log("Namaste");
//             setTimeout(() => {
//                 console.log("Hi");
//                 setTimeout(() => {
//                     console.log("bonjours");
//                 }, 2000);
//             }, 2000);
//         },2000)
//     }, 2000)
// }, 2000);


// enahnced object literals
// const user = (name, age, work) => {
//     return{
//         name: name,
//         age: age,
//         work: work,
//     };
// }

// const user = (name, age, work) => {
//     return{
//         name,
//         age,
//         work,
//         intro() {
//             console.log(`My name is ${name} & I am ${age}, & my profession is ${work}`)},
//     };
// }

// can use shorthand function in method in enanched object literals with function call and () weird. ill try to remember.

// const leslie = user("Leslie", 31, "Programmer")
// console.log(leslie.intro())

// const obj = (a, b, c) =>{
//     return{
//         a,
//         b,
//         c,
//         numbers() {
//             console.log(`a is ${a} b is ${b} c is ${c}`)
//         }
//     }
// }

// const a = 1;
// const b = 2;
// const c = 3;

// const nums = obj(1 , 2 , 3)
// console.log(nums.numbers());

// const lib = {
//     sum(a,b) { a + b},
//     mult(a,b) { a * b},
// };
//  console.log(lib.sum(2,3));
//  console.log(lib.mult)
// const getPersonES6 = (name, age, height) =>
// {
//     return{
//         name,
//         age,
//         height,
//     }
// }

// const user1 = getPersonES6("Leslie", 31, 411);
// console.log(user1);

// countTo5 = (count = true) =>{
//     if (count === true){
//         for(let i = 1; i <= 5; i++){
//             console.log(`Count: ${i}`);
//         }
//     }
// }
// countTo5()

// ratings = (rate) =>{
//     if (rate === 5) {
//         console.log(`High Rating`)
//     } else if (rate ===0){
//         console.log(`Low Ratings :(`)
//     }
// }

// ratings(5)

// multiply = (a,b = 1) =>  {
//     return a * b;
        
// }

// console.log(multiply(3))

//spread operator 

// giveMe4 = (a,b,c,d) =>{
//     console.log("a", a);
//     console.log("b", b);
//     console.log("c", c);
//     console.log("d", d);




// }
// const colors = [ 'red', 'green', 'blue', 'teal']
// // spreads array into individual elements

// giveMe4(...colors);


// const strNums = ['one', 'two', 'three']
// const moreStrNums = ['four', 'five', 'six']
// const concats = [...strNums, ...moreStrNums]
// console.log(concats)

// let peoples = ['huxn', 'alex', 'jordan']

// const allPeps = ['Timmy', ...peoples, "John"];
// console.log(allPeps)


// without ... the items are nested in the index they are mentioned in
const obj1 = {x:1, y:2}
const obj2 = {z:3}
const obj3 = {...obj1, ...obj2}

console.log(obj3)

































































































































































































