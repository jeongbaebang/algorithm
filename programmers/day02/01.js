// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 두 수의 나눗셈

function solution(num1, num2) {
  const thousand = 1000;
  const answer = (num1 / num2) * thousand;

  return Math.trunc(answer);
}
