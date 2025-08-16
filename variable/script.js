//variables

let name="krisih";//string variable
let age=20//number variable


let ramu;
ramu = 1000; //number variable
let somu;
somu = 2000;

let total;
total = ramu + somu;
console.log("ramu amount:", ramu);
console.log("somu amount:", somu);
console.log("total amount:", total);

console.log("constant variable");
console.log(
  "if you decleared a vairable as constant vairable ,then you not have chance to resign a value "
);
const raju = 300;
let rani = 200;
total = raju + rani;
console.log("raju amount:", raju);
console.log("ranu amount", rani);
console.log("total:", total);
console.log('hi')



//bigint variable

let num=983478957348758n;
console.log(typeof num);

let num1=BigInt(8);
console.log(num1)
console.log(typeof num1)

console.log("converting string into number using number and + uniory opertator")
let ex="900"
console.log(typeof ex)
console.log(typeof +ex)
console.log(typeof(Number(ex)))


//boolean
let bookisgood=true
console.log(typeof bookisgood)
if(bookisgood)
{
  console.log("buy the book")
}
else
{
  console.log("dont buy the book")
}


//built-in-object  null

//dont use undefined use only null you dont want to assign value
let marks=undefined;
console.log(typeof marks)

let marks1=null;
console.log(marks1)

//symbol

let id1=Symbol("dbghdjh")
console.log(typeof id1)
console.log(id1.description)//it print description in the id1
