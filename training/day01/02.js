// 문제유형: a와 b출력하기

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  console.log(`a = ${Number(input[0])}`);
  console.log(`b = ${Number(input[1])}`);
});