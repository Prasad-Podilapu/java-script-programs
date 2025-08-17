console.log("object keys");
let student = {
  name: "krish",
  rno: 234305,
  class: "computers",
};
let keys = Object.keys(student);
console.log(keys);

let values = Object.values(student);
console.log(values);

let entries = Object.entries(student);
console.log(entries);
