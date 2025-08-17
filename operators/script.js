console.log("operators");
let num1 = 17;
let num2 = 2;
console.log("addintion", num1 + num2);
console.log("subtraction", num1 - num2);
console.log("division", num1 / num2);
console.log("multiplication", num1 * num2);
console.log("remainder", num1 % num2);
console.log("exponsoion", num1 ** num2);

// if you want fixed digits in division use .toFixed()
let division_num = num1 / num2;
console.log(division_num.toFixed(3));

// when use multipliating string and number you get same answer like number into number

n1 = "5";
n2 = 5;
console.log(n1 * n2);

//but when you use + then it will combine the both like "10"+24 =1024

e1 = "10";
e2 = 28;
console.log(e1 + e2);

//pre increment operator
let numb1 = 5;
++numb1;
console.log(numb1);

//pre decrerment operator
--numb1;
console.log(numb1);

//post increment operator
numb1++;
console.log(numb1);

//post decrement operator
numb1--;
console.log(numb1);

//comparision operator

console.log(5 > 4);
console.log(8 < 9);
console.log(4 == 9);
console.log(9 != 6);
console.log("a"> "z");


//A=65 and....Z=90    a=97 and ... z=122


//loose equality  it convert both into number and then check the operation

console.log(0==false)//true
console.log(""==false)//true  
//  //loose inequlaity is opposite to this 



//strict equality   its work based on data type 

console.log(0===false)//false
console.log(""===false)//false

//strict inequality is opposite to this