// 제한시간내에 풀이 [v]
// 문제유형: 문자열, 반복문, 출력, 배열, 조건문
// 문제형태: 입출력 문제를 처음 겪어서 어떻게 해결해야 할지 몰랐다

function solution() {
  return answer;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  solution(Number(input[0]));
});

function solution(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += '*';
    }
    console.log(str);
  }
}
