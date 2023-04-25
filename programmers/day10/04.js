// 제한시간내에 풀이 [x]
// 문제유형: 수학
// 문제형태: 경우의 수
// 소감: n! / (m! * (n-m)!) 공식을 기억하자

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1n;
  }

  return BigInt(num) * factorial(num - 1);
}

function solution(n, m) {
  return Number(factorial(n) / (factorial(m) * factorial(n - m)));
}
