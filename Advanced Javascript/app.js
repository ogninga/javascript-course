//console.log(window)

// console.log(this)// refers to window object

// console.log(this === window) //equal to it a window object



// window.firstName = "bil"
// this.lastName = "WebDev"
// console.log(window) // refers to window object

//---------


// const printThis = () => this; // still refers to the window object

// function printThis() { // refer to the window object
//     return this;
// }

// const res = printThis()

// console.log(res)






//----------


// write normal function, refers to owner obj

// const obj ={
//     userName : "bill",
//     lastName : "john",
//     fullName : function ()  { 
//         return `${this.userName} +  + ${this.lastName}`
//     }, 
// };



// const res = obj.fullName()
// console.log(res) // refers
//------



// arrow function doesnt work on this. will push to window object in arrow function, function refers its parent 
//  this.userName = "bill"
// this.lastName = "john"
// const obj ={
//     userName : "bill",
//     lastName : "john",
//     fullName :  () => { 
//         return `${this.userName} +  + ${this.lastName}`
//     }, 
// };



// const res = obj.fullName()
// console.log(res) // refers

//-----------------


// const person = {
//     name : "John",
//     age : 22,
//     greetRegular: function () {
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
//     },
//     greetArrow: () => console.log(`Hello my name is ${this.name} and I am ${this.age} years old`),
// }
// person.greetRegular()
// person.greetArrow()



//factory function useful for having objects that repeat infomation slightly different, helps not to keep replicating 

// function name(params) {
//     {}
// }

// function createUser (firstName, lastName, pl, pet, car){
//     return{
//         firstName,
//         lastName,
//         pl,
//         pet,
//         car,
//         fullName: function (){
//             console.log(`Hello my name is ${this.firstName} ${this.lastName}. I like to program in ${this.pl}, my pet is ${pet}, and I drive a ${car}.`);
//         },
//     };
// };

// const john = createUser("John", "Doe","Python","Dog", "dodge" )


// console.log(john.fullName())



// function createCar(type, brand, model, year){
//     return{
//         type,
//         brand,
//         model,
//         year,
//         specs : function () {
//             return console.log(`My car is a ${this.type}, made by ${this.brand}. It is a ${this.year} ${this.model} `)
//         }

//     }
// }

// const driverBob = createCar("sedan", "dodge", "avenger", 2003);

// driverBob.specs()


//constructor function 

// function CreatePeople(firstName, lastName, pl){
//     this.firstName = firstName // gives window
//     this.lastName = lastName
//     this.pl =pl

//     this.info = function () {
//         console.log(`Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`)
//     }
// }

//the new keyword:
//1. first create empty object {}
//2. sets "this" to point to that object
//3. we can omit the return keyword statement due to the new keyword.

// const john = new CreatePeople("john", "doe", "python")
// console.log(john)

// john.info()


// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year

//     this.getInfo = function(){
//         return `${this.title} by ${this.author} (${this.year})`
//     }
// }

// const book1 = new Book("the subtile art of not giving a f*ck", "mark", 2020)
// const book2 = new Book("atomic habits", "james", 2022)

// console.log(book1)

// console.log(book1.getInfo())

// function Person(name, age, gender) {
//     this.name = name
//     this.age = age
//     this.gender = gender
//     this.info = function () {
//         return ` my name is ${name} and I am ${age} years old. I am a ${gender}`
//     }
// };

// const newUser = new Person("timmy", 23, "Male")
// const userDetails = newUser.info()
// console.log(userDetails)

// function Car(make, model, year, color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.start = function () {
//        return `Starting the ${this.make} ${this.model}`
//     };
//     this.stop = function () {
//        return `Stopping the ${this.make} ${this.model}`
//     }


// }
// const car1 = new Car("Dodge", "Ram", 2024, "Red")
// const car2 = new Car("Jeep", "Cheap", 2021, "blue")

// const c1 = car1.start()
// const c2 = car2.stop()


// console.log(c1)
// console.log(c2)

// built in constructor


// const num1 = new Number(10)
// const st1 = new String("emman") //string must be typed in upper case first letter
// const bool1 = new Boolean(true)
// const arr1 = new Array(1,2,3,4,5)
// console.log(arr1)

//object.create()


// let person = {
//     greet: function () {
//         console.log(`hello my name is ${this.firstName} ${this.lastName}`)
//     }
// }

// const eman = Object.create(person)
// eman.firstName = "huse"
// eman.lastName ="poo"

// eman.greet()

// let john = Object.create(person, {
//     firstName: {value: "John"},
//     lastName: {value: "Doe"}
// })
// console.log(john)
// john.greet()










