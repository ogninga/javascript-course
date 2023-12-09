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



function createCar(type, brand, model, year){
    return{
        type,
        brand,
        model,
        year,
        specs : function () {
            return console.log(`My car is a ${this.type}, made by ${this.brand}. It is a ${this.year} ${this.model} `)
        }

    }
}

const driverBob = createCar("sedan", "dodge", "avenger", "2003");

driverBob.specs()




































