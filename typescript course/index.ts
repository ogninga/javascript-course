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

//regular function

// function double(x: number): number {
//   return x * x;
// }

// const res = double(10);
// console.log(res);

//arrow func

// const doubl2 = (x: number) => x * x;
// console.log(doubl2(10));

//void in typescript doesnt return values

// function printMessage(message: string): void {
//   console.log(`this is my message ${message}`);
// }

// printMessage("hello");

//never keyword.

// use cases for the never keyword, a function that always throws an error, a function that has an infitinite loops, or a variable that can never have a value.

// function throwError(msg:string) : never{
//  throw new Error(msg);
// }

// function infi():never{
//     while(true){}
// }
// let x = never
// function neverReturn(): never {
//   while (true) {}
// }

// x = neverReturn()

//arrays types

//bracket notation [] array type

// const nums: number[] = [1, 2, 3, 4, 5];
// const str: string[] = ["1, 2, 3, 4, 5,", "two"];
// console.log(nums);

// const items: string[] = [];

// items.push("one");
//cant push the wrong data types.
// console.log(items);

// const numList: number[] = [];

// numList.push(20);

// console.log(numList);

//second flavor of arrays - depreciated not just  deprecated eh, dont use.

// const items: Array<number> = [1, 2, 3];

// console.log(items);
