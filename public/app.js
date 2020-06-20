import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/listTemplate.js";
// const InvOne = new Invoice("mario", "work on something", 500);
// const InvTwo = new Invoice("mario test", "work on something", 800);
// const invoices: Invoice[] = [];
// invoices.push(InvOne);
// invoices.push(InvTwo);
// console.log(invoices);
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values; // created tuples type
    values = [tofrom.value, details.value, amount.valueAsNumber]; // assigned form values to this array object
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    //   console.log(doc);
    list.render(doc, type.value, "end");
    form.reset();
});
// enum
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["Books"] = 0] = "Books";
    ResourceTypes[ResourceTypes["AUTHER"] = 1] = "AUTHER";
    ResourceTypes[ResourceTypes["FILM"] = 2] = "FILM";
    ResourceTypes[ResourceTypes["PERSON"] = 3] = "PERSON";
})(ResourceTypes || (ResourceTypes = {}));
const docResource = {
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
let array2;
array2 = ["niket", 68686, "djfhdj"];
// array2[0] = 767;
// array2[1] = 200;
// array2[2] = "string";
console.log(array2);
