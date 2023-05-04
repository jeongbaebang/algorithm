// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 세균 증식

function solution(n, t) {
  let answer = n;

  for (let i = 1; i <= t; i++) {
    answer *= 2;
  }

  return answer;
}
