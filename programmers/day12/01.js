// 제한시간내에 풀이 [x]
// 문제유형: 수학
// 문제형태: 주사위의 개수
// 소감: 수학 공식을 모르니 풀지를 못하겠다

function solution(box = [1, 1, 1], n = 0) {
  return box
    .map((num) => {
      return Math.floor(num / n);
    })
    .reduce((a, b) => a * b, 1);
}
