const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(10));

// explicit types
let char: string;
let age: number;
let isTrue: boolean;

// arrays
let ninja: string[] = [];
ninja.push("dfjdfjd");
console.log(ninja);

// union types
let mix: (string | number | boolean)[] = [];
mix.push("dfjdhjfh");
mix.push(23232);
mix.push(true);
console.log(mix);

let uid: string | number;

// objects
let ninjaOne: object;
ninjaOne = { name: "test", age: 67 };

let ninjaTwo: {
  name: string;
  age: number;
  status: boolean;
};

ninjaTwo = {
  name: "Niket",
  age: 7,
  status: true,
};
console.log(ninjaTwo);

// any
let age1: any;

age1 = "Niket";
age1 = true;
age1 = 38;
age1 = ["name", "age"];

// any object
let ninja3: { name: any; age: any };
console.log(
  (ninja3 = {
    name: "dhfjdhf",
    age: 2,
  })
);

console.log("djfhdjfhdjfhdjhfdjhfjdfh");
