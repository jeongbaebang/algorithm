// 제한시간내에 풀이 [v]
// 문제유형: 출력, 연산
// 문제형태: 홀짝 구분하기

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  const even = (n) => `${n} is even`;
  const odd = (n) => `${n} is odd`;

  n = Number(input[0]);

  if (n % 2 === 0) {
    console.log(even(n));
  } else {
    console.log(odd(n));
  }
});
