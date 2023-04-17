// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 짝수는 싫어요

function solution(n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}
