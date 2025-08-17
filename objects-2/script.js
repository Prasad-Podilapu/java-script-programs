/*
console.log("objets");
let stu = {
  namuu: "krisih",
  ron: 5,
  class: "computers",
};

let stu2 = stu;
console.log(stu);
console.log(stu2);

stu2.namuu = "prasad";  //it copy the reference 
console.log(stu2.namuu);


//using object.assign()

console.log("objets");
let stu = {
  namuu: "krisi",
  ron: 5,
  class: "computers",
};

let stu2 = Object.assign({},stu)
console.log(stu);
console.log(stu2);

stu2.namuu = "prasad";
console.log(stu2.namuu);

//using spread operator
console.log("objets");
let stu = {
  namuu: "krisi",
  ron: 5,
  class: "computers",
};

let stu2 = {...stu}
console.log(stu);
console.log(stu2);

stu2.namuu = "prasad";
console.log(stu2.namuu);
*/

//but they only shallow coping not deep cloning
//they become problem in neseted object

console.log("objets");
let stu = {
  namuu: "krisi",
  ron: 5,
  class: "computers",
  address: {
    city: "vijayawada",
    state: "andhra pradesh",
  },
};

let stu2 = { ...stu };
console.log(stu);
console.log(stu2);

stu2.address.city = "vij";
console.log(stu2.address.city);
console.log(stu.address.city);
