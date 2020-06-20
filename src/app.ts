import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/listTemplate.js";

// const InvOne = new Invoice("mario", "work on something", 500);
// const InvTwo = new Invoice("mario test", "work on something", 800);

// const invoices: Invoice[] = [];
// invoices.push(InvOne);
// invoices.push(InvTwo);

// console.log(invoices);

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

const form = <HTMLFormElement>document.querySelector(".new-item-form");
console.log(form.children);

const type = <HTMLSelectElement>document.querySelector("#type");
const tofrom = <HTMLInputElement>document.querySelector("#tofrom");
const details = <HTMLInputElement>document.querySelector("#details");
const amount = <HTMLInputElement>document.querySelector("#amount");

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number]; // created tuples type
  values = [tofrom.value, details.value, amount.valueAsNumber]; // assigned form values to this array object

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  //   console.log(doc);
  list.render(doc, type.value, "end");
  form.reset();
});

// enum
enum ResourceTypes {
  Books,
  AUTHER,
  FILM,
  PERSON,
}

// generics

interface Resources<T> {
  uid: string;
  resourceName: ResourceTypes;
  data: T;
}

const docResource: Resources<object> = {
  uid: "dkfjhkdsf",
  resourceName: ResourceTypes.AUTHER,
  data: { name: "abb" },
};
console.log(docResource);

// tuples  // Tuple is a new data type which includes two set of values of different data types.

const array = ["niket", "test", 20];
array[0] = 767;
array[1] = 200;
array[2] = "string";
console.log(array);

let array2: [string, number, string];
array2 = ["niket", 68686, "djfhdj"];
// array2[0] = 767;
// array2[1] = 200;
// array2[2] = "string";
console.log(array2);
