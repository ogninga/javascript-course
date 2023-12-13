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

// protype inheritance

// function Animale(name){
//     this.name = name;

// }


// Animale.prototype.sound = function(){
//     return "Animal Sound"
// }
// useful for attaching methods to different functions
// const ani1 = new Animale("Frog");
// console.log(ani1.sound());



// function Dog(name, breed){
//     Animale.call(this, name);
//     this.breed = breed;

// }

//the object.create creates a new object, out of an existing object that functions as the prototype of a new object copy and past litterally
// Dog.prototype = Object.create(Animale.prototype)



//cant access a function from a function thats declared differently, I mean a method? look above for example

// const dog1 = new Dog("Buddy", "Genius")
// console.log(dog1.sound())

//classes 

//class declarations
// class Person {
//     constructor(firstName, lastName, age) {
//         //Instance Members
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.printUserInfo = function (){
//             return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`
//         }



//     }
//     // protype members
//     greet(){
//        return `hello from ${this.firstName} ${this.lastName}`
//     }


// }


// inheritance from classes

// class Programmer extends Person {
//     constructor(firstName, lastName, age, pl, experience) {
//         super(firstName, lastName, age) // <this calls the parent constructor
//         this.pl = pl;
//         this.experience = experience


// }
// }



//creating instance of classes

// const john = new Person("eman", "john", 192)

// console.log(john.greet())


// const bob = new Programmer("HuXn", "WebDev", 19, "Golang", 12);
// console.log(bob.greet())

// class Hero {
//     constructor(name, level){
//         this.name = name;
//         this.level = level;
//     }
//     greet() {
//         return `Hello, ${this.name}, you are level ${this.level}`
//     }
// }

// const newHero = new Hero("wizzy", 29)
// console.log(newHero.greet())
// console.log(newHero)

// class Mega extends Hero {
//     constructor(name, level, spell){
//         super(name, level)
//         this.spell = spell;
//     }
// }

// const newMega = new Mega("Wiz", "99", "Explosion")
// console.log(newMega)
// console.log(newMega.greet())


// next section modifiers of javascript.


// full oop effects, encapsulation abstraction inheritance and polymorphism

//private makes property private

//public make it public avalible, makes it accessible

//protected, only accessible inside class.

// function MyClass(publicField, privateField, protectedField){
//     //public field
//     this.publicField = publicField

//     //private field (closure) wont make it really private, but it is understood that it isnt to be used outside.
//     //const keeps it private in the class
//     const _privateField = privateField

//     //protected Field 
//     const _protectedField = protectedField



//     // public method
//     this.publicMethod = function (){
//         return `Public Field: ${this.publicField}`
//     }

//     //private method (closure)
//     function _privateMethod(){
//         return `Private Method: ${_privateField}`
//     }

//     //Protected MEthod (closure)

//     function _protectedMethod(){
//         return `Protected MEthod: ${_protectedField}`
//     }

//     // Method to access protected method
//     this.accessProtectedMethod = function (){
//         return _protectedMethod()
//     }

// }

// const myObject = new MyClass("Public data", "Private Data", "Protected Data")

// // console.log(myObject.publicField)
// // console.log(myObject.privateField)
// // console.log(myObject.protectedFieldField)
// console.log(myObject.publicMethod())

// // does not work due to protected or private
// // console.log(myObject._privateMethod())
// // console.log(myObject._protectedMethod())

// //still works cause java has no real way to stop it.
// console.log(myObject.accessProtectedMethod())


// encapsulation 

// function Counter() {
//     let _count = 0 //private variable
    
//     //public method that can access and modify the private variable

//     this.increment = function () {
//         _count ++
//     }

//     this.decrement = function (){
//         _count --
//     }

//     this.getCount = function () {
//         return _count
//     }
// }


// const counter = new Counter()
// console.log(counter._count)
// console.log(counter.getCount()) // 0
// counter.increment()
// counter.increment()
// counter.increment()
// console.log(counter.getCount()) // 3
// counter.decrement()
// console.log(counter.getCount()) // 2


// //abstraction 


// // Abstract classs (providing a blueprint for subclasses)

// //parent class
// class Animal {
//     constructor(name){
//         this.name = name;
//     }

//     // Abstract method ( to be implemented by subclasses)

//     makeSound() {
//         throw new Error("Method makeSound() must be implemented in order to use, DO better!")
//     }







// }


// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     //implementing the abstract method
//     makeSound(){
//         return "Woof!"
//     }
// }

// //concrete subclass
// class Cat extends Animal {
//     constructor(name){
//         super(name)
//     }

//     makeSound(){
//         return "meow!"
//     }
// }

// const dog = new Dog ("Buddy")

// console.log(dog.name)
// console.log(dog.makeSound())

// const cat = new Cat("whiskey")


// console.log(cat.name)
// console.log(cat.makeSound())


//-- explanation of whats going on. above

// there is an abstract class on Animale, that has an abstract method makeSound() the makeSound() method is declared in the Animal Class, but isnt provided an inherited implementation. it is meant to be implemented in subclasses like the dog and cat subclasses

//the Dog and Cat classes are called concrete subclasses that inherit from the animal class with the help of the super keyword. They make use and implement the abstract method makeSound() with their own customizations as to what sound to make on call.

//by using abstraction, a common interface makeSound() that each subclass must implement, while the internal details of how each animale makes its sound. this makes the code simplified, and allows work with different animals at a higher level of abstraction. this allows the specifics of each animal sound implementation to work without to much worry.

//inheritance


//ES5 code

// function Animal(name){
//     this.name = name;
// }


//method shared among all Animal instances

// Animal.prototype.makeSound = function (){
//     return "Unknown sound"
// }

//Subclass constructor inheriting from animal

// function Dog(name){
// Animal.call(this, name) // call the super class constructor
// }

//setup prototype chain for Dog to inherit form Animal

// Dog.prototype = Object.create(Animal.prototype)

//Method specific to Dog

// Dog.prototype.makeSound = function () {
//     return `WOOF!`
// }

//creating instances of the classes

// const genericAnimal = new Animal("Generic animal name")
// console.log(genericAnimal.name)
// console.log(genericAnimal.makeSound())
// const dog = new Dog("Buddy")

// console.log(dog.makeSound())

//ES6

//define superclass

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     makeSound() {
//         return 'Unknown Sound'
//     }
// }

//subclass inheriting from animal

// class Dog extends Animal{
//     constructor(name) {
//         super(name)
// }
// makeSound(){
//     return"Woof!"
// }
// }

// const genericAnimal = new Animal("Generic animal name")
// console.log(genericAnimal.makeSound())

// const dog = new Dog("buudt")
// console.log(dog.makeSound())
// console.log(dog);

//Polymorphism 

//typically achieved thought method overriding, where a subclass provides its own implementation of a method that is already defined in the parent class.

//superclass or parent class
// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     makeSound(){
//         return "unkown sound"
//     }
// }


// class Dog extends Animal{
//     constructor(name) {
//         super(name)
//     }
    //overriding method
//     makeSound(){
//         return "Woof!"
//     }
// }

// class Cat extends Animal {
//     constructor(name){
//         super(name)
//     }
    //overriding method
  
//     makeSound(){
//         return 'Meow!'
//     }
// }



// function animalInfo(animal){
//     console.log(`Name: ${animal.name}`)
//     console.log(`Sound: ${animal.makeSound()}`)
// }

// const genericAnimal = new Animal("Generic Animal")
// animalInfo(genericAnimal)

// const dog = new Dog("buddy");
// animalInfo(dog);

// const cat = new Cat("winny")
// animalInfo(cat)


//Synchronous Code
// function myFunc(){
//     console.log('inside function')
// }


// console.log('start')
// myFunc()
// console.log('end')

//asynchronous code

// console.log('start')

// setTimeout(() => {
//     console.log('Inside SetTimeOut');
// }, 2000)

// console.log('end')

//callback hell

// function callBackHell(callback){
//     setTimeout(()=>{
//         const data = "inside (callbackHEll) function"
//         console.log(data)
//         callback(data)
//     }, 2000)
// }

// function firstFunc( data, callback){
//     setTimeout(() => {
//         const processedData = `${data} - Processed first`
//         console.log(`Inside(firstFunc) function`)
//         callback(processedData)
//     }, 1000);
// }

// function secondFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed Second`
//         console.log('Inside (secondFunc) Function')
//         callback(processedData)
//     },1500 );
// }

//CallbackHEll start
// callBackHell((data) => {
//     firstFunc(data, (processedData1) =>{
//         secondFunc(processedData1,(processedData2)=>{
//             console.log(`Final result of all functions: ${processedData2}`)
//         })
//     })
// })

// callback is not always asynchornous
// console.log("start")

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// numbers.forEach((n) => console.log(n))
// console.log("End")

//promises

// function checkNumber(number){
//     return new Promise((resolve, reject) => {
//         if (number % 2 === 0){
//             resolve(`${number} is an even number`)
//         } else {
//             reject(`${number} is an odd number`)
//         }
//     });
// };

// or 

// const checkNumber = (number) => new Promise((resolve, reject) => number % 2 === 0 ? resolve(`${number} is an even number`) : reject(`${number} is an odd number`))



// const numberToCheck = 7
// //then and catch, then excudes on true, catch executes on false
// checkNumber(numberToCheck).then((message) => {
//     console.log(`Success: ${message}`)
// }).catch(error => console.log(`Error: ${error}`))





// refactored


// function callBackHell(callback){
//     setTimeout(()=>{
//         const data = "inside (callbackHEll) function"
//         console.log(data)
//         callback(data)
//     }, 2000)
// }

// function firstFunc( data, callback){
//     setTimeout(() => {
//         const processedData = `${data} - Processed first`
//         console.log(`Inside(firstFunc) function`)
//         callback(processedData)
//     }, 1000);
// }

// function secondFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed Second`
//         console.log('Inside (secondFunc) Function')
//         callback(processedData)
//     },1500 );
// }


// function callBackHell() {
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             const data = "Inside(callbackhell) function"
//             console.log(data)
//             resolve(data)
//         }, 2000);
//     })
// }

// function firstFunc(data) {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`
//             console.log("Inside (firstFunc) function")
//             resolve(processedData)
//         }, 2000);
//     })
// }

// function secondFunc(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`
//             console.log("Inside (second func) function")
//             resolve(processedData)
//         }, 1500);
//     })
// }

// callBackHell()
// .then((data) => firstFunc(data))
// .then((processedData1) => secondFunc(processedData1))
// .then((processedData2) => 
//     console.log(`final results of all functions with promises: ${processedData2}`
//     )
//     )
//     .catch((error) => console.log(`Error: ${error}`))

//promise


// console.log("Start")


// function getUserDataFromDB(name){
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Getting User Name...")
//             resolve(name)
//         }, 2000);
//     })
// }

// function getUserHobbies(){
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("Getting User hobbies...")
//           resolve(["football", "tennis", "running"])
//         }, 2000);
//     })
// }
// getUserDataFromDB("pikachu").then((name) => getUserHobbies(name)).then((hobby)  => console.log(hobby)).catch(err => console.log(err))


// console.log("End")


//async function


//await only for async

// function fetchDataFromServer(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("user data retrieved from the server.")

//         }, 4000);
        
//     })
// }

// async function getUserData(){
//     try{
//         const data = await fetchDataFromServer()
//         console.log(data)
//         console.log("remaining task can be executed here.")

//     } catch(error){
//         console.log(error)
//     }
// }

// getUserData()


//refactor previous code.

// function callBackHell() {
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             const data = "Inside(callbackhell) function"
//             console.log(data)
//             resolve(data)
//         }, 2000);
//     })
// }

// function firstFunc(data) {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`
//             console.log("Inside (firstFunc) function")
//             resolve(processedData)
//         }, 2000);
//     })
// }

// function secondFunc(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`
//             console.log("Inside (second func) function")
//             resolve(processedData)
//         }, 1500);
//     })
// }

// callBackHell()
// .then((data) => firstFunc(data))
// .then((processedData1) => secondFunc(processedData1))
// .then((processedData2) => 
//     console.log(`final results of all functions with promises: ${processedData2}`
//     )
//     )
//     .catch((error) => console.log(`Error: ${error}`))


// new call back hell with async 

// function callbackHEll(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = 'inside (callbackHEll) function'
//             console.log(data)
//             resolve(data)
//         }, 2000);
        
//     })
// }

// function firstFunc(data){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed first.`
//             console.log("inside firstfunc function")
//             resolve(processedData)
//         },2000 );
//     })
// }

// function secondFunc(data){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed second.`
//             console.log("inside secondfunc function")
//             resolve(processedData)
//         },1500 );
//     })
// }

// async function processedDataWithAyncAwait(){
//     try{
//         const data = await callbackHEll()
//         const processedData1 = await firstFunc(data)
//         const processedData2 = await secondFunc(processedData1)
//         console.log(`final result of all functions with async/await: ${processedData2}`)
//     }catch (error){
//         console.log(`Error: ${error}`)
//     }
// }

// processedDataWithAyncAwait()



// refactored 2

// function getUserDataFromDB(name){
//    return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Getting User Name...")
//             resolve(name)
//         }, 2000);
//     })
// }

// function getUserHobbies(){
//    return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Getting User hobbies...")
//           resolve(["football", "tennis", "running"])
//         }, 2000);
//     })
// }

// async function getUserAndHobbies(){
//     try{
//         const name = await getUserDataFromDB("emmanuel")
//         const hobby = await getUserHobbies(name)
//         console.log(`name: ${name}, hobbies: ${hobby}`)

//     }catch (error){
//         console.log(`Error: ${error}`)
//     }
// }

// getUserAndHobbies()



//fetch api


// console.log(fetch("text.txt"))

//can solve with callback, new promise, or async /await

//text method returns promise 
//if resolved will retrurn text representation of body 

// fetch("text.txt").then(res => res.text()).then(data => console.log(data)).catch(error => console.log(error))

// const result = document.querySelector('.results')

// fetch("text.txt").then((res) => {
//     if (!res.ok) throw Error(res.statusText)
//     return res.text()
// })
// .then(data => console.log(data))
// .catch(error => console.log(error))

//refactored with async and await
// async function renderData(){
//     try{
//         const response = await fetch('text.txt')
//         if(!response.ok) throw Error(response.statusText) // status text is a method, shows true or notfound in the dom.
//         const data = await response.text()
//         result.textContent = data
//     }catch(err){
//         console.log(err)
//     }
   
// }
// renderData()

//fetch api promise only rejects when we have a network error(not in other cases).

// console.log(fetch('text.txt'))

//retrieve api from json file.

const result = document.querySelector('.results')
async function renderData(){
    try{
        const response = await fetch('data.json')
        if(!response.ok) throw Error(response.statusText)
        const data = await response.json()
    //result.textContent = data.name
    result.textContent = data.age
    console.log(data)

    } catch (error){
        console.log(error)
    }
}


renderData()































































