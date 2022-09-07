import * as readline from 'node:readline/promises';

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



const positionArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]

console.log("Welcome to tic tac toe game.")
console.log("You have been assigned to play as X")

// Print the game board.
printBoard()

let position
let turn = 0

while (turn < 9 && !hasWon()) {
  position = parseInt(await reader.question('Position: '))
  if (turn % 2 === 0) {
    positionArray[position] = 'X'
  } else {
    positionArray[position] = 'O'
  }
  turn++
  printBoard()
}

function hasWon () {
  
  // Check if player has won by rows.
  if (positionArray[0] === positionArray[1] && positionArray[0] === positionArray[2] && positionArray[0] !== 0) {
    return true
  } else if (positionArray[3] === positionArray[4] && positionArray[3] === positionArray[5] && positionArray[3] !== 0) {
    return true
  } else if (positionArray[6] === positionArray[7] && positionArray[6] === positionArray[8] && positionArray[6] !== 0) {
    return true
  }

  // Checks if player has won by columns.

  // Checks if player has won by diagonal.

}

// A function that prints out the board in the console.

function printBoard (position) {
  const square = "| |"
  const amountOfSquares = 9;

  // Print each square.
  for(let i = 0; i < 9; i++) {
    if (positionArray[i] === 0) {
      process.stdout.write(`|   `)
    } else {
      process.stdout.write(`| ${positionArray[i]} `)
    }
    if ((i + 1) % 3 === 0) {
      process.stdout.write('|\n')
    }
  }

}