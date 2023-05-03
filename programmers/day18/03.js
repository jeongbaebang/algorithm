// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: 자릿수 더하기

function solution(n) {
  let answer = 0;

  n = String(n);

  for (x of n) {
    answer += Number(x);
  }

  return answer;
}
