// 📦 Import prompt-sync for input and chalk for colorful output
const prompt = require("prompt-sync")(); // 🧾 For taking input
const chalk = require("chalk");          // 🎨 For colorful output

// 📌 Declare game-related variables
let max;
let min;
let attempts = 0;
let maxAttempts;
let guessCorrectly = false;

while (true) {
    console.clear(); // 🧹 Clear terminal for a clean interface

    // 🖼️ Show welcome message
    console.log(chalk.blueBright.bold("========== 🎯 Welcome to Number Guessing Game 🎯 =========="));
    console.log(`
📊 Choose Difficulty:
1. Easy      (1 - 20)     🔹 7 attempts
2. Medium    (1 - 100)    🔸 10 attempts
3. Hard      (1 - 1000)   🔺 15 attempts
4. Hardcore  (1 - 5000)   🔻 17 attempts
`);

    // 🧾 Get user difficulty choice
    let choice = parseInt(prompt(chalk.yellow("👉 Enter your choice (1-4): ")));

    // ⚙️ Set game range and maxAttempts based on difficulty
    if (choice === 1) {
        max = 20; min = 1; maxAttempts = 7;
    } else if (choice === 2) {
        max = 100; min = 1; maxAttempts = 10;
    } else if (choice === 3) {
        max = 1000; min = 1; maxAttempts = 15;
    } else if (choice === 4) {
        max = 5000; min = 1; maxAttempts = 17;
    } else {
        console.log(chalk.red("❌ Invalid input! Please enter a number between 1 to 4."));
        continue;
    }

    // 🎲 Generate a random number within the selected range
    let randomNumber = Math.floor(Math.random() * max) + min;

    // 🔁 Start the guessing loop
    attempts = 0;
    guessCorrectly = false;

    while (attempts < maxAttempts) {
        attempts++;
        console.log(chalk.magentaBright(`\n🎯 Attempt ${attempts} of ${maxAttempts}`));

        // 🧾 Ask user for a guess
        let num = parseInt(prompt("🔢 Enter your guess: "));

        // 🧠 Check and give feedback
        if (isNaN(num)) {
            console.log(chalk.red("❌ Please enter a valid number!"));
        } else if (num > randomNumber) {
            console.log(chalk.yellow("📉 Too high! Try a smaller number."));
        } else if (num < randomNumber) {
            console.log(chalk.yellow("📈 Too low! Try a bigger number."));
        } else {
            console.log(chalk.greenBright("✅ Yayyy! You guessed it correctly! 🎉"));
            guessCorrectly = true;
            break;
        }
    }

    // 😓 If user didn't guess correctly
    if (!guessCorrectly) {
        console.log(chalk.redBright(`\n❌ You've used all your attempts. The correct number was: ${chalk.bold(randomNumber)}`));
    }

    // 🔁 Ask if the user wants to play again
    let playAgain = prompt(chalk.cyan("\n🔁 Do you want to play again? (y/n): "));
    if (playAgain.toLowerCase() !== 'y') {
        console.log(chalk.blueBright("\n👋 Thanks for playing... Goodbye! 🎮"));
        break;
    }
}