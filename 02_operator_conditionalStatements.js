// 🛠️ Importing required module for user input and colored output
const prompt = require("prompt-sync")(); // 🧾 For taking input
const chalk = require("chalk"); // 🌈 For colorful output

//-------------------------- 🔢 OPERATORS ----------------------------------

// 📦 Variable declaration
let a = 70;
let b = 50;

// 🔢 Arithmetic Operators
console.log(chalk.yellow.bold("\n📊 Arithmetic Operators"));
console.log("📦 a =", a, " & b =", b);
console.log("➕ a + b =", a + b);
console.log("➖ a - b =", a - b);
console.log("✖️ a * b =", a * b);
console.log("➗ a / b =", a / b);
console.log("🧮 2 ^ 3 =", 2 ** 3); // Exponentiation
console.log("🪙 a % b =", a % b); // Remainder

// ⬆️ Increment Operator (Unary)
b = b + 1; // 👈 Manual increment
b++; // 👈 Post-increment
console.log("🔼 Updated b =", b); // Should be 52

// ⬇️ Decrement Operator (Unary)
a = a - 1; // 👈 Manual decrement
a--; // 👈 Post-decrement
console.log("🔽 Updated a =", a); // Should be 68

// 📝 Assignment Operators
console.log(chalk.yellow.bold("\n📝 Assignment Operators"));
a += 7; // a = 68 + 7 = 75
b -= 7; // b = 52 - 7 = 45
console.log("🆕 Updated a =", a);
console.log("🆕 Updated b =", b);

// ⚖️ Comparison Operators
console.log(chalk.yellow.bold("\n⚖️ Comparison Operators"));
console.log("a == b ->", a == b);   // Loose equality
console.log("a != b ->", a != b);
console.log("a < b  ->", a < b);
console.log("a > b  ->", a > b);
console.log("a <= b ->", a <= b);
console.log("a >= b ->", a >= b);
console.log("5 == '5' ->", 5 == '5'); // true
console.log("a === b ->", a === b);  // Strict equality
console.log("a !== b ->", a !== b);  // Strict inequality

// 🔍 Strict Comparison (Data Type Matters)
console.log(chalk.yellow.bold("\n🔍 Strict Comparison"));
let c = 5; // number
let d = "5"; // string
console.log("c == d  ->", c == d);  // true
console.log("c === d ->", c === d); // false
console.log("c !== d ->", c !== d); // true

// 🧠 Logical Operators
console.log(chalk.yellow.bold("\n🧠 Logical Operators"));
let p = 6;
let q = 5;
let cond1 = p > q;     // true
let cond2 = p === 6;   // true
let cond3 = p < q;     // false

console.log("✅ cond1 && cond2 =", cond1 && cond2); // AND
console.log("❌ cond3 && cond2 =", cond3 && cond2);
console.log("⭕ cond3 || cond2 =", cond3 || cond2); // OR
console.log("🚫 !cond1 =", !cond1); // NOT

//--------------------- 🧾 Conditional Statements -----------------------

console.log(chalk.cyan.bold("\n🧾 Conditional Statements"));

// 🧑‍⚖️ IF Statement
let age = 16;
if (age >= 18) {
    console.log("✅ You can vote!");
}
if (age < 18) {
    console.log("❌ You CANNOT vote!");
}

// 💡 IF-ELSE Statement
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log("🎨 Mode color:", color);

// Another IF-ELSE example
age = 45;
if (age >= 18) {
    console.log("✅ You can vote!");
} else {
    console.log("❌ You cannot vote!");
}

// 🔍 Odd or Even Checker
let num = 47;
if (num % 2 === 0) {
    console.log("🔢", num, "is an Even number");
} else {
    console.log("🔢", num, "is an Odd number");
}

// ⛳ Else-if Ladder
age = 84;
let post;
if (age < 18) {
    post = "🧒 Junior";
} else if (age > 60) {
    post = "👵 Senior";
} else {
    post = "🧑 Intermediate";
}
console.log("📋 Your post:", post);

// ❓ Ternary Operator
age = 25;
let canDrive = age >= 18 ? "🚗 Can apply for driving license" : "🚫 Not eligible for driving license";
console.log(canDrive);

let isAdult = age >= 18 ? "🧑 Adult" : "🧒 Not adult";
console.log(isAdult);

// 🔄 Switch Statement → skipped as it's unused here

// 📘 Practice Question 1: Multiple of 5
console.log(chalk.magenta.bold("\n📘 Practice: Check if number is multiple of 5"));
let n = parseInt(prompt("🔢 Enter a number: "));
if (n % 5 === 0) {
    console.log("✅", n, "is a multiple of 5.");
} else {
    console.log("❌", n, "is NOT a multiple of 5.");
}

// 📘 Practice Question 2: Grading System
console.log(chalk.magenta.bold("\n📘 Practice: Student Grading System"));
let marks = parseInt(prompt("🎓 Enter student marks (0–100): "));
let grade;

if (marks >= 90 && marks <= 100) {
    grade = "🏆 A";
} else if (marks >= 70 && marks <= 89) {
    grade = "🥈 B";
} else if (marks >= 60 && marks <= 69) {
    grade = "🥉 C";
} else if (marks >= 50 && marks <= 59) {
    grade = "🟡 D";
} else if (marks >= 0 && marks <= 49) {
    grade = "❌ F";
} else {
    grade = "⚠️ Please enter marks between 0 and 100.";
}
console.log("📄 Grade:", grade);