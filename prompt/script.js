let username = prompt("What is your name?");
console.log(`Welcome ${username}, thank you for visiting my page!`);

let weight = Number(prompt("Enter your weight in kg"));
let height = Number(prompt("Enter your height in cm")) / 100; // Convert cm to meters

console.log(`Weight: ${weight} kg`);
console.log(`Height: ${height} m`);

let bmi = (weight / height ** 2).toFixed(2);
console.log(`Your BMI is: ${bmi}`);

