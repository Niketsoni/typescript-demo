"use strict";
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(10));
// explicit types
let char;
let age;
let isTrue;
// arrays
let ninja = [];
ninja.push("dfjdfjd");
console.log(ninja);
// union types
let mix = [];
mix.push("dfjdhjfh");
mix.push(23232);
mix.push(true);
console.log(mix);
let uid;
// objects
let ninjaOne;
ninjaOne = { name: "test", age: 67 };
let ninjaTwo;
ninjaTwo = {
    name: "Niket",
    age: 7,
    status: true,
};
console.log(ninjaTwo);
// any
let age1;
age1 = "Niket";
age1 = true;
age1 = 38;
age1 = ["name", "age"];
// any object
let ninja3;
console.log((ninja3 = {
    name: "dhfjdhf",
    age: 2,
}));
console.log("djfhdjfhdjfhdjhfdjhfjdfh");
