// 제한시간내에 풀이 [v]
// 문제유형: 출력, 연산
// 문제형태: 덧셈식 출력하기

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const sum = Number(input[0]) + Number(input[1]);

  console.log(`${Number(input[0])} + ${Number(input[1])} = ${sum}`);
});
