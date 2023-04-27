// 제한시간내에 풀이 [x]
// 문제유형: 수학
// 문제형태: 소인수분해 (소인수 구하기)
// 소감: 소수 구하기, 소인수분해 구하기는 외우두면 좋겠다

// 소수 판별하기 알고리즘
// 2부터 판별하는 수 전까지 나눠보고 나머지가 0이 안나온다면 소수로 정의
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n) {
  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  // 남은 n이 소인수 분해되지 않은 소수인 경우를 처리하는 부분
  if (n > 2) {
    factors.push(n);
  }

  return [...new Set(factors)];
}
