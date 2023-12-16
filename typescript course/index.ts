//strings

// let myName: string = "Jose"; //set value
// myName = "Jose"; //change value
// console.log(myName);
//numbers
// let favNumber: number = 10;
// console.log(favNumber);
//boolean
// let tsHard: boolean = false;
// tsHard = true;
// console.log(tsHard);

//type inferring assumes the type based on value

// let tech = "Typescript";
// cant change type, ie tech to boolean or number and any other way
// let favNumber = 10;
// let love = true;
// console.log(typeof tech);
// console.log(typeof favNumber);
// console.log(typeof love);

// any type, can be used to reference any type.

// warning should be used rarely. Overuse of any can lead to untyped code, and make it much harder to catch bugs during development related to type. it is better to use specific types when possible to keep benefits of type checking.

// let neverUse: any = "please dont use";
// neverUse = 10;
// neverUse = true;
// neverUse();
// neverUse.toUpperCase();
// console.log(neverUse);

// let color: any = "blue";
// color = 10;
// color = true;
// color()
// console.log(color);

//dont use any

//function parameters annotations
//like varibles if you do a type, it will error if it isnt the same type
//regular function

// function addOne(num: number): number {
//   return num + 1;
// }

// const res = addOne(10);
// console.log(res);

//arrow func the parameter implicitly has an ANY type. remember that

// const double = (x: number, y: number) => x + y;

// const rest = double(10, 20);
// console.log(rest);

//typescript will warn you if you provide more or less values than specified

//default params value

//how you default infer in a function.
// function greet(person = "world") {
//   return `hello ${person}`;
// }

// other option
// function greet(person:string = "world") {
//     return `hello ${person}`;
//   }

// const greet1 = greet();
// console.log(greet1);

//Return annotations (regular)
