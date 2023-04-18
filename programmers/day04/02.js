// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 피자 나눠 먹기 (2)
// 소감: 빠르게 문제의 패턴을 찾는게 중요하다

function solution(n) {
  let count = 1;

  if (n === 6) {
    return 1;
  }

  while (true) {
    const value = n * count;

    if (value % 6 === 0) {
      return value / 6;
    }

    count += 1;
  }
}
