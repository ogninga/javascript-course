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
