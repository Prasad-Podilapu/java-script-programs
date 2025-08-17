console.log("types of scope");
//global scope :the varaibles you can access any whare in the progarm
let name1;
let age = "20";
name1 = prompt("enter your name:");

check();

function check()
{
  if (name1 == "krish" && age === 20) {
    console.log(`${name1} your age is ${age}`);
  } else {
    console.log(`sorry ${name1} i dont know your age`);
  }
}

//you cant acces the variables out side the block which are declered inside the block only for let and const
//but var in not a block scope 
//only let and const are the block scope
