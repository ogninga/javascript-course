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



function firstLevel(f1){
    const value = 100;
    f1(value);
}

firstLevel(function(value){
    console.log(value);
});


// example 2



function doggy(name, retrieved){
    console.log(`Woof doggy ${name}`);
    retrieved();
}

function retrieved(){
    console.log(' I fetched a bone')
}

doggy("Sparky", retrieved)





// method

const person = { 
    name:"HuXn",
    age: 19,
    greet: function (){
        return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
    },
};



























































































































































































