// 대소문자 바꿔서 출력하기

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
  solution(str);
});
// // 대문자는 소문자로 소문자는 대문자로 변환

function solution(str) {
  let answer = '';

  for (x of str) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }

  console.log(answer);
}
