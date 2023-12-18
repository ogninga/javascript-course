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

//multi dimensional arrays call it with two pairs of brackets [][]

// const singleDi: number[] = [1, 2, 3, 4, 5];
// const multiDi: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const tripleDi: number[][][] = [[[1, 2, 3, 4, 5]]];

// console.log(singleDi);
// console.log(multiDi);
// console.log(tripleDi);

//objects syntax  type varName (annotation/types) = {property:value}
//my guess number : guessingIt (string) = {name: 'john'}

//must declare all properties with a value

// const person: { firstName: string; lastName: string; age: number } = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// };
// console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
// function

// function printUser(): { name: string; age: number; location: string } {
//   return {
//     name: "john",
//     age: 25,
//     location: "NY",
//   };
// }

// const res = printUser();
// console.log(res);

//type aliases

//declare values declare type keyword. instead of let or const, types need uppercaee convention
// type Person = {
//   name: string;
//   age: number;
// };

//use values in a function
// function printPerson(person: Person) {
//   console.log(person.name);
//   console.log(person.age);
// }

//place fill values in variables
// const myPerson: Person = {
//   name: "John",
//   age: 25,
// };

//Use values in function call.

// printPerson(myPerson);

// type User = {
//   name: string;
//   age: number;
//   location: string;
// };

// const printUserInfo = (user: User) => {
//   return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
// };

// const resu = printUserInfo({
//   name: "alexo",
//   age: 22,
//   location: "US",
// });

// console.log(resu);

//optional properties add question mark after declared property if you want the value to be optional.

//also readonly property. makes the property read only to where the value cannot be changed.

// type User = {
//   name: string;
//   age?: number;
//   location: string;
//   readonly id: number; // like for ids is a good use case.
// };

// const user: User = {
//   name: "alexo",
//   age: 22,
//   location: "US",
//   id: 1,
// };
// console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);

//intersection types

//declare all values in an object

// type Person = {
//   name: string;
//   age: number;
// };

// type employee = {
//   id: number;
//   title: string;
// };

//make new object that combines both together.
// type personAndEmployee = Person & employee;

//use both objects as a data type, and put that in a new object.
// const bob: personAndEmployee = {
//   name: "bob",
//   age: 25,
//   id: 1,
//   title: "manager",
// };
// see results.
// console.log(bob);

// example 2

// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };

// type AccountDetails = {
//   username: string;
//   password: string;
// };

// type UserAndAccount = UserInfo & AccountDetails;

// const sally: UserAndAccount = {
//   first: "Sally",
//   last: "Smith",
//   age: 25,
//   username: "SallySmith",
//   password: "<PASSWORD>",
// };
// console.log(sally);

//Unions denoted with |(or)

// let password: string | number = 22;

// type UserInfo = {
//   first: string;
//   last: string;
//   age: number;
// };
// type AccountDetails = {
//   email: string;
//   password: string;
// };

// let user: UserInfo | AccountDetails = {
//   first: "Sally",
//   last: "Smith",
//   age: 25,
//   email: "<EMAIL>",
//   password: "<PASSWORD>",
// };
// console.log(user);

//Literal Types

//Examples

//string literal
// let color: "red" | "blue" | "green";
// color = "red"; //valid
// color = "brone"; //error | invalid

//number literal
// let num: 1 | 2 | 3 | 4 | 5;
// num = 1; //valid
// num = 9; //error | invalid

//boolean literal
// let isDone: true | false;
// isDone = true; //valid
// isDone = false; //invalid

//Tuples

// let myTuple2: [number, string] = [1, "hello"];

//or

// myTuple2 = [1, "hello"];

// const products: (number | string)[] = [1, "hello", 12];

// console.log(products);

// const games: [string, string, string] = ["pong", "pacman", "tetris"];

//destructuring individual elements

// let myTuple: [string, number] = ["hello", 22];
// let [first, second] = myTuple;
// console.log(first);
// console.log(second);

//Enums

// enum WeatherConditions {
//if no value is assigned returns index number
//   Sunny = "sunny",
//   Rainy = "rainy",
//   Snowy = "snowy",
//   Windy = "windy",
// }

// console.log(WeatherConditions.Rainy);

// const currentWeather = WeatherConditions.Rainy;
// console.log(`the current weather is ${currentWeather}`);

//class properties

class Person {
  name: string;
  age: number;
  //can add readonly, also maybe ?
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("john", 22);

console.log(person);

//access modifiers
