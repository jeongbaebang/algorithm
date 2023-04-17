// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 중앙값 구하기

function solution(array) {
  const sorted = array.sort((a, b) => a - b);
  const length = array.length;
  const center = Math.trunc(length / 2);

  return sorted[center];
}
