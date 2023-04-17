// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 피자 나눠 먹기

// 7명 이하는 무조건 1반환
// 7의 배수로 나누어 떨어져야 카운팅된다.
function solution(n) {
  const PIZZA = 7;
  const count = n / PIZZA;

  if (n <= PIZZA) {
    return 1;
  }

  if (n % PIZZA === 0) {
    return count;
  } else {
    return Math.floor(count) + 1;
  }
}
