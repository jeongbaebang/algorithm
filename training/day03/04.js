// 제한시간내에 풀이 [v]
// 문제유형: 연산
// 문제형태: 더 크게 합치기

function solution(a, b) {
  const ab = Number('' + a + b);
  const ba = Number('' + b + a);

  if (ab === ba) {
    return ab;
  }

  if (ab > ba) {
    return ab;
  }

  return ba;
}
