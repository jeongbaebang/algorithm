// 제한시간내에 풀이 [x]
// 문제유형: 구현
// 문제형태: 분수의 덧셈

function solution(numer1, denom1, numer2, denom2) {
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const commonDenom = lcm(denom1, denom2);
  const numer =
    numer1 * (commonDenom / denom1) + numer2 * (commonDenom / denom2);
  const denom = commonDenom;
  const divisor = gcd(numer, denom);

  return [numer / divisor, denom / divisor];
}

function solution(numer1, denom1, numer2, denom2) {
  const commonDenom = denom1 * denom2;

  // numer 변수에는 각 분수의 분자를 곱한 후 더한 값을 할당
  const numer = numer1 * denom2 + numer2 * denom1;

  const gcd = getGcd(numer, commonDenom);

  return [numer / gcd, commonDenom / gcd];
}

// 유클리드 알고리즘 - 두수를 나눈 나머지를 구하고, 이를 반복해 가면서 최대공약수를 구하는 방법.
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}
