// Primitive types
//  7 types : String, Number, Null, Boolean,Undefined,Symbol, BigInt

//JavaScript is a dynamically losely typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
// For example, in JavaScript, you can do the following:
// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.
// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them

// Reference (Non-Primitive) type
// Arrays, Objects, Functions

const heros =["Kripesh", "Raj", "Panta"]

const bignumber= 784159725446321n;
// number ko paxadi "n" include garyo vani tyo big number ma convert hunxa.

const outsidetemp = null;

let myObj = {
    name:"Kripesh",
    age: 20
}

const myfunction = function() {
    console.log("Kripesh Raj Panta");
}

console.log(typeof bignumber);
console.log(typeof outsidetemp);

//string= string
// undefined = undefined
// null = Object
// number = number
// boolean = boolean
// object(native and does not implement [Call]) = object
// object (native or host and does implement [call] || [function] = function
// object (host and doesnot implement [call]) = Implementation-define expect may not be "undefined", "boolean", "number", "String".

console.log(typeof myfunction);
console.log(typeof heros);

