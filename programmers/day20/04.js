// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: 머쓱이보다 키 큰사람

function solution(array = [], height = 0) {
  return array.filter((num) => num > height).length;
}
