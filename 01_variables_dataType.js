// 📦 Import chalk
const chalk = require("chalk");

// 🌟 Welcome Section
console.log(chalk.bold.blue("\n🌐 Welcome to JavaScript Learning Terminal!\n"));
console.log("👩‍💻 " + chalk.cyan("Sakshi Sharma"));

// 📦 VARIABLES
console.log("\n" + chalk.bold.magenta("📦 VARIABLES"));
let fullname = "Sakshi Sharma";
console.log("👤 Full Name:", chalk.green(fullname));

let Age = 21;
let price = 99.99;
console.log("🎂 Age:", chalk.yellow(Age));
console.log("💰 Price:", chalk.yellow(price));

// 🕳️ Null and Undefined
console.log("\n" + chalk.bold.magenta("🕳️ Null and Undefined"));
let x = null;
let y = undefined;
console.log("❌ x (null):", chalk.gray(x));
console.log("❓ y (undefined):", chalk.gray(y));

// 🔘 Boolean Type
console.log("\n" + chalk.bold.magenta("🔘 Boolean Type"));
let isFollow = false;
console.log("🔘 isFollow:", chalk.red(isFollow));
isFollow = true;
console.log("🔘 isFollow (updated):", chalk.green(isFollow));

// 📌 Variable Declarations
console.log("\n" + chalk.bold.magenta("📌 Variable Declarations"));
let a = 14;
a = 15;
console.log("📦 a (let updated):", chalk.green(a));

const prod = "facewash";
const pi = 3.14;

// 🧪 DATA TYPES
console.log("\n" + chalk.bold.magenta("🧪 DATA TYPES"));
let age = 21;
let Price = 99.9;
console.log("📊 typeof age:", chalk.cyan(typeof age));
console.log("📊 typeof Price:", chalk.cyan(typeof Price));
console.log("📊 typeof prod:", chalk.cyan(typeof prod));
console.log("📊 typeof isFollow:", chalk.cyan(typeof isFollow));

let b;
console.log("📊 typeof b (uninitialized):", chalk.gray(typeof b));

let c = null;
console.log("📊 typeof c (null):", chalk.gray(typeof c));

let d = BigInt(1234);
console.log("📊 typeof d (BigInt):", chalk.cyan(typeof d));

let e = Symbol("Hello");
console.log("📊 typeof e (Symbol):", chalk.cyan(typeof e));

// 📘 Object Example
console.log("\n" + chalk.bold.magenta("📘 Object Example - Student"));
const student = {
  fullName: "Sakshi Sharma",
  age: 22,
  cgpa: 8.8,
  isPass: true,
};
console.log("🎓 Student Object:", student);
console.log("📊 typeof student:", chalk.cyan(typeof student));
console.log("📌 CGPA:", chalk.yellow(student.cgpa));
console.log("📌 isPass:", chalk.green(student.isPass));

// 🧠 Practice Questions
console.log("\n" + chalk.bold.magenta("🧠 PRACTICE QUESTION 1: Product Object"));
const product = {
  prodName: "Parker Jotter Standard CT Ball Pen",
  prodColor: "black",
  prodRating: 7002,
  price: 270,
  discount: 5,
};
console.log("🛒 Product Info:", product);

console.log("\n" + chalk.bold.magenta("🧠 PRACTICE QUESTION 2: Profile Object"));
const profile = {
  username: "@Shradhakhapra",
  posts: 195,
  followers: 569000,
  following: 4,
  institute: "Apna College",
};
console.log("📱 Profile Info:", profile);