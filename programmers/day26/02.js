// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 종이 자르기

function solution(M, N) {
  if (M === 0 && N === 0) return 0;

  return M * N - 1;
}
