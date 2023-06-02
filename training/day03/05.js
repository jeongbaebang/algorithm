// 제한시간내에 풀이 [v]
// 문제유형: 연산
// 문제형태: 두 수의 연산값 비교하기

function solution(a = 1, b = 1) {
  const ab = Number('' + a + b);
  const other = 2 * a * b;

  if (ab < other) {
    return other;
  }

  return ab;
}
