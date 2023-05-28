// 제한시간내에 풀이 [V]
// 문제유형: 문자열 비교
// 문제형태: A로 B 만들기

function solution(before, after) {
  const a = [...before].sort().join('');
  const b = [...after].sort().join('');

  return a === b ? 1 : 0;
}
