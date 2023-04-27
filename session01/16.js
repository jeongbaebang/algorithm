// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 중복 제거

function solution(str = []) {
  let answer = [];

  for (const x of str) {
    if (!answer.includes(x)) {
      answer.push(x);
    }
  }

  console.log(answer);
}

solution(['good', 'time', 'good', 'time', 'student']);
