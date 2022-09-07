import * as readline from 'node:readline/promises';

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


console.log("Welcome to tic tac toe game.")
console.log("You have been assigned to play as X")

// Print the game board.



const positionQuestion = reader.question('Position: ')

// A function that prints out the board in the console.

function printBoard (position) {
  const square = "| |"
  const amountOfSquares = 9;

  // Print each square.
  for(let i = 0; i < amountOfSquares; i++) {
	
  }

	
}