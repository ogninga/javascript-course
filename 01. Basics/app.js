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
// const obj1 = {x:1, y:2}
// const obj2 = {z:3}
// const obj3 = {...obj1, ...obj2}

// console.log(obj3)
// can be used to copy a property


// let person = {
//     name: 'emmanuel',
//     age: 36,
//     gender: 'male',
// }
// const clone = {...person, work: 'Programmer', location: 'Earth'};
// console.log(clone)

// Challenge

// let arr = [1,2,3];
// let arr2 = [4,5];

// const arrclone = [...arr, ...arr2,]
//  console.log(arrclone)


// const user = {
//     name: 'Jen',
//     age: 22,
// }

// const jensClone = {...user}
// console.log(jensClone)

// rest operators

// user = (x,...userData) => {
//     console.log(x)
//     console.log(userData);
// }


// user("wow", 'Powe', 19)


// person = (firstName, lastName, ...Hobbies) => {
// console.log("First Name: ",firstName)
// console.log("Last Name: ",lastName)
// console.log("Hobbies: ",Hobbies)
// }


// person("HuXn", "WebDev", 'food', 'chicken', 'huuu', 11)

//good job emmanuel, keep working you will get there. think about the job and if it serves you.

// movies = (...titles) => {
//     console.log("Movie titles: ",titles);
// }

// movies("die hard", "Pokemon", "One Piece");


// destructuring  


// const foo = ['one', 'two', 'three', 'four', 'five', 'six']

// const [one, two, three] = foo

// console.log(one)
// console.log(two)
// console.log(three)

//detructuring undefined variables with no value

// const foo2 = ['one', 'two']

// const [chicken, cat, dog] = foo2

// console.log(chicken)
// console.log(cat)
// console.log(dog)

//destructuring items, and giving them default values.
// let a, b

// [a = 5, b = 8] = ["one", "two"]
// console.log(a)


// pass array that gets returned as a function.


// f = () =>{
// return [1,2]
// };

// let c, d;
// [c, d]=f()
// console.log(c)
// console.log(d)

// how to ignore some return values

// j = () =>{
//     return[1,2,3,4]
// }

// const [f, , v, ] = j()

// console.log(f)
// console.log(v)
// console.log(j())

// const [a, ...b]=['one', 'two', 'three']

// console.log(b)



// const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// const [color1, color2, color3, ...bleh] = colors


// console.log(color1)
// console.log(color2)
// console.log(color3)
// console.log(bleh)


// in object destructuring order doesnt matter but the name does matter. in object destructuring 
//the name is already determined by the order of the events, ex student already has a title 
// so always when destructuring choose a name that makes sense when pulling it out.

// const student = {name: 'Student', position: "first", rollNo:27}

// const {rollNo} = student

// console.log(rollNo);


// no ... in object destructuring 
// const person = {
//     name: "John Doe",
//     age: 30,
//     gender: "male",
//     country: "USA",
// }

// const {name, age, country} = person
// console.log(name, age, country)

// rename varibles (OBJECTS ONLY!!!) 

// const num = {x:100, y:200}
// const {x: newXname, y: newYname} = num

// console.log(newXname)
// console.log(newYname)


//rest operator with object destructuring

// let{a, b, ...rest} = {a: 100, b:200, c:300, d:400, e:500}
// console.log(a, b, rest)  


// const person = {
//         name: "John Doe",
//         age: 30,
//         gender: "male",
//         country: "USA",
//     }

// const {name: personName, age: personAge, country: personCountry} = person

// console.log(personName)
// console.log(personAge)
// console.log(personCountry)

// const person = {
//     name: 'John Doe',
//     age: 30,
//     country: 'USA',
// }
// const person2 = {
//     name: 'John Does',
//     age: 31,
//     country: 'toilet',
// }

//way number one with repeating person tag 
// printPersonInfo = person =>{
//     console.log(`Name: ${person.name}`)
//     console.log(`Age: ${person.age}`)
//     console.log(`Country: ${person.country}`)
// }
//way number two with less repeating


// printPersonInfo = ({name, age, country}) =>{
//     console.log(`Name: ${name}`)
//     console.log(`Age: ${age}`)
//     console.log(`Country: ${country}`)
// }

// printPersonInfo(person2)

//object to function destructuring, the object is created, then the values that needs to be pulled are listed in the params of the function, the function takes the arguments, on calling the function the function can take the name of the object and then use its params to fill what the function takes as a argument.

//sample 2
// let options = {
//     title: "my menu",
//     items: ['item1', 'item2']
// }

// showMenu = ({title:  Untitled, width: w = 100, height: h = 200, items: [item1, item2] }) => {
//     console.log(`${Untitled} ${w} ${h}`)
//     console.log(item1)
//     console.log(item2)
// }



// showMenu(options)

//nested destructuring array and objects together

// const songs = [
//     { name: "Lucky You", singer: "Joyner", duration: 4.34},
//     { name: "Just Like You", singer: "NF", duration: 3.23},
//     { name: "Humble Singer", singer: "Kendrick Lamar", duration: 2.33},
//     { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43},
//     { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23},
// ];

// const [, , , {singer: artist}] = songs

// console.log(artist)


//destructuring mixer Read over this to see the limits of dustructuring and refer back to this in the future.

// const data = {
//     user:{
//         id:123,
//         name: "John Doe",
//         age: 30,
//         email: "john.doe@example.com",
//         address: {
//             city:"New York",
//             country: 'USA',
//         },
//         hobbies: ["Reading", "Painting", "Cooking"],
//         scores: {
//             math:95,
//             science: 88,
//             history: 75,
//         },
//     },
//     products: [
//         {id: 1, name: "Laptop", price: 1000},
//         {id: 2, name: "Phone", price: 800},
//         {id: 3, name: "Tablet", price: 500},
//     ],
//     settings: {
//         darkMode: true,
//         notifications: {
//             email: true,
//             sms: false,
//             push: true,
//         },
//         language: "English",
//     },
// };

// const {
//     user: {
//         name, age, address: {city, country},hobbies,scores: {math, science, history},
//         email,

//     },
//     products: [product1, product2, product3],
//     settings:{
//         darkMode,
//         notifications:{
//             email: emailNotification,
//             sms: smsNotification,
//             push: PushNotification,
//         },
//         language,
//     },
// } = data;

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Address: ${city}, ${country}`);
// console.log(`Hobbies: ${hobbies.join(", ")}`);
// console.log(`Math Score: ${math}`);
// console.log(`Science Score: ${science}`);
// console.log(`History Score: ${history}`);
// console.log(`Product1: ${product1.name} - $${product1.price}`);
// console.log(`Product2: ${product2.name} - $${product2.price}`);
// console.log(`Product3: ${product3.name} - $${product3.price}`);
// console.log(`Dark Mode: ${darkMode}`);
// console.log(`Email Notification: ${emailNotification}`);
// console.log(`SMS Notification: ${smsNotification}`);
// console.log(`Push Notification: ${PushNotification}`);
// console.log(`language: ${language}`);

//ternary operator short hand for if else, doesnt help an else if statement

// condition ? exprIfTrue : exprIfFalse;

// let password = 8;

// passwordChecker = ps =>{
//     if (ps === 8) {
//         return `Strong Password`
//     } else {
//         return "Password should be 8 characters."
//     }
// }

//now with ternary operator

// passwordChecker = ps =>{
//    return ps === 8 ? 'Strong Password' : "Password should be 8 characters"
// }

// const res = passwordChecker(password)

// console.log(res)

// second ternary operator example
// const age = 25
// const isAdult = age >= 18 ? "adult" : "Not an Adult"

// console.log(isAdult)

// const walletAmount = 1

// MoneyChecker = mc =>{
//     return mc >= 1 ? "Are able to buy things" : "Not able to buy anything"
// }

// const storeMinimumMoney = MoneyChecker(walletAmount)
// console.log(storeMinimumMoney)

// // or

// const storeMinimum = walletAmount>= 1 ? "Sure come on in you got some money" : "Go away, you have no money"
// console.log(storeMinimum)

// for in loops

// for (let/const key in object) {...}

// let person = {
//     name: "John",
//     age: 25,
//     gender: "Male",
// }
//  for (let keys in person) {
//     console.log(keys, person[keys])
//  }
 // you can write the varible name next to chosen value in key object and it will be returned


// let list = ['one', 'two', 'three', 'four']

// for (let index in list){
//     console.log(`${index}: ${list[index]}`)
//     console.log(index, list[index])
// }

const object = {a: 1, b:2, c:3};

for (let list in object){
    console.log(list, object[list])
}














































































































































































