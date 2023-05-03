// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: 숫자찾기

function solution(num, k) {
  num = String(num);

  for (let i = 0; i < num.length; i++) {
    if (num[i] == k) {
      return i + 1;
    }
  }

  return -1;
}
