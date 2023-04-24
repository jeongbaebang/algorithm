// 제한시간내에 풀이 [v]
// 문제유형: 연산
// 문제형태: 양꼬치
// 소감:

function solution(n, k) {
  const service = ~~(n / 10);

  return n * 12000 + k * 2000 - service * 2000;
}
