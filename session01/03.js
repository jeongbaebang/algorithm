// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 1부터 까지 합 출력하기

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  return answer;
}
