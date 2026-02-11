#! /usr/bin/env node

const readline = require('readline');

function getRandomIntInclusive() {
    return Math.floor(Math.random() * 100) + 1;
}
const secretNum = getRandomIntInclusive()

console.log("Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100.");
console.log("");

console.log("You have 5 chances to guess the correct number.");
console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)`)
console.log("");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function provideHint(number) {
    if (secretNum > Number(number)) {
        console.log(`Incorrect! The number is Greater than ${number}`);
    } else {
        console.log(`Incorrect! The number is less than ${number}`);
    }

}
function validateGuess(totalGuess) {
    rl.question(`Guess the Number:`, (number) => {

        const guess = Number(number);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("Please enter a valid number between 1 and 100.\n");
            validateGuess(totalGuess);
            return;
        }

        if (guess === secretNum) {
            console.log("Correct! You guessed the number!");
            rl.close();
            return;
        }
        totalGuess--;

        if (totalGuess === 0) {
            console.log("Game Over!");
            console.log(`The correct number was: ${secretNum}`);
            rl.close();
            return;
        }

        if (guess < secretNum) {
            console.log(`Incorrect! The number is Greater than ${number}`);
        } else {
            console.log(`Incorrect! The number is Lesser than ${number}`);

        }
        console.log(`Attempts remaining: ${totalGuess}\n`);
        validateGuess(totalGuess);
    });
}

function askLevel() {
    rl.question('Enter your choice: ', (choice) => {
        if (choice === '1') {
            validateGuess(10)
        } else if (choice === '2') {
            validateGuess(5)
        } else if (choice === '3') {
            validateGuess(3)
        } else {
            console.log(`invalid option`);
        }
    });
}


askLevel()