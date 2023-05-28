// 제한시간내에 풀이 [v]
// 문제유형: 출력, 연산
// 문제형태: 문자열 돌리기

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];

  for (x of str) {
    console.log(x);
  }
});
