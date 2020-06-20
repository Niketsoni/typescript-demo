import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatters } from "./interfaces/HasFormatter.js";
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

  let doc: HasFormatters;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  //   console.log(doc);
  list.render(doc, type.value, "end");
  form.reset();
});
