// 제한시간내에 풀이 [v]
// 문제유형: 조건문 순회
// 문제형태: 짝수의 합

function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }

  return answer;
}
