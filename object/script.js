/*console.log("object is thing that have sate and behavior");
let student = {
  peru: "krish",
  rno: 234305,
  class: "computer science",
  wish: function () {
    console.log(`happy birthday ${this.peru}`);
  },
};
student.wish();
console.log("name:", student.peru);
console.log("roll number", student.rno);
console.log("class:", student.class);
console.log(student);
//update in object values

student.peru = "prasad";
console.log("updated name:", student.peru);

//adding property
student.gender = "male";
console.log("gender:", student.gender);

//deleting property
delete student.class;
console.log(student.class);

let fullname = student.peru;
//built in objects methods

console.log(fullname.toUpperCase()); //() uses because it is method

//task
let patient = {
  fullname: "K Premela",
  height: 162,
  weight: 62,
};
console.log(patient);

const pname = "dhoni";
const age = 45;
const role = "captain";

let player = {
  pname,
  age,
  role,
};
console.log(player);
*/



//the function can also decler as

let student = {
  peru: "krish",
  rno: 234305,
  class: "computer science",
  play() {
    console.log(`happy birthday ${this.peru}`);
  },
};
student.play();