import * as readline from 'node:readline/promises';

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const positionQuestion = reader.question('Position: ')

// 