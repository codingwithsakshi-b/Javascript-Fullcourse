// 🧾 Require input and chalk for colored terminal output
const prompt = require("prompt-sync")(); 
const chalk = require("chalk");

// 🔁 FOR LOOP: Print name 5 times
console.log(chalk.bold.cyan("\n🔁 FOR LOOP: Printing name 5 times\n"));
for (let count = 1; count <= 5; count++) {
    console.log(chalk.greenBright(`${count} ➡️ Sakshi`));
}
console.log(chalk.yellow("✅ Loop has ended.\n"));

// 🧮 OPTION 1: Sum of first n natural numbers using formula
let num = parseInt(prompt(chalk.cyan("🔢 Enter a number to calculate sum: ")));
let totalSum = (num * (num + 1)) / 2;
console.log(chalk.greenBright(`🧮 Total Sum (using formula) = ${totalSum}`));

// 🧮 OPTION 2: Sum of first n natural numbers using FOR loop
let sum = 0;
for (let i = 1; i <= num; i++) {
    sum += i;
}
console.log(chalk.green(`🧮 Total Sum (using loop) = ${sum}\n`));

// 🔁 WHILE LOOP: Product of first n natural numbers
let n = parseInt(prompt(chalk.cyan("🔢 Enter a number to calculate product: ")));
let prod = 1n;
let i = 1n;

while (i <= BigInt(n)) {
    prod *= i;
    i++;
}
console.log(chalk.magentaBright(`🧮 Final Product = ${prod}\n`));

// 🔁 DO-WHILE LOOP: Executes at least once
i = 20;
console.log(chalk.bold.cyan("🔁 DO-WHILE LOOP: Should run once even if condition false"));
do {
    console.log(chalk.green("👋 Sakshi"));
    i++;
} while (i <= 10);
console.log(chalk.yellow("✅ Do-while loop exited.\n"));

// 🔁 FOR-OF LOOP: Iterating through a string
let name = "Sakshi";
console.log(chalk.cyan("🔁 FOR-OF LOOP: Printing characters of a name"));

for (let char of name) {
    console.log(chalk.magenta(`🔠 ${char}`));
}

// 🔢 Calculate the length of the name using loop
let size = 0;
for (let char of name) {
    size++;
}
console.log(chalk.greenBright(`📏 Length of name = ${size}\n`));

// 🔁 FOR-IN LOOP: Iterating through object properties
let student = {
    name: "Sakshi Kumari",
    age: 21,
    cgpa: 8.9,
    isPass: true,
};

console.log(chalk.cyan("🔁 FOR-IN LOOP: Displaying student object properties"));
for (let key in student) {
    console.log(chalk.blueBright(`🗝️ Key: ${key} ➡️ Value: ${student[key]}`));
}
console.log("");

// 🧠 PRACTICE Q1: Print all even numbers from 0 to 100
console.log(chalk.bold.cyan("🧠 Practice Question 1: Print all even numbers from 0 to 100"));
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(chalk.green(i));
    }
}

// 🧠 PRACTICE Q2: Number guessing game
console.log(chalk.bold.cyan("\n🧠 Practice Question 2: Number Guessing Game"));
const gameNum = Math.floor(Math.random() * 10) + 1;

let guess;
while (true) {
    guess = parseInt(prompt(chalk.yellow("🎮 Guess the number (1-10): ")));
    if (guess === gameNum) {
        console.log(chalk.greenBright("🎉 Correct Guess! You won! ✅"));
        break;
    } else {
        console.log(chalk.red("❌ Wrong guess! Try again..."));
    }
}