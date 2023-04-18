// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 피자 나눠 먹기 (3)

function solution(slice, n) {
  let count = 1;

  while (true) {
    const value = slice * count;

    if (n - value <= 0) {
      return count;
    }

    count += 1;
  }
}
