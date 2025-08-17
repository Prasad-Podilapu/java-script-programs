console.log("function");
let currntage = 0;
let age1 = Number(prompt("krish what is your age"));
thankyou("krish", age1);

let age2 = Number(prompt("boostu what is your age"));
thankyou("boostu", age2);

let age3 = Number(prompt("prasuu what is your age"));
thankyou("prasuu", age3);

function thankyou(username, age) {
  console.log(`${username} your age is ${age || "not entered"}`);
  currntage = currntage + age;
  if (age >= 18) {
    console.log(`${username} you are elgilbel to vote`);
  } else {
    console.log(`${username} you not elible to vote`);
  }
  console.log(`current age is:${currntage}`);
  console.log("thankyou for your answer");
  console.log("please subscribe krish tech channel");
}
console.log(`total age is:${currntage}`);
/*

//function expression can not use before function declearation

var thankyouu =function (username,ae) {
  console.log(`${username} your age is ${ae||"not entered"}`);
  console.log("thankyou for your answer");
  console.log("please subscribe krish tech channel");
}

console.log("function");
let ae1 = prompt("krish what is your age");
thankyouu("krish",ae1);

let ae2 = prompt("boostu what is your age");
thankyouu("boostu",ae2);

let ae3 = prompt("prasuu what is your age");
thankyouu("prasuu",ae3);


*/
