// 제한시간내에 풀이 [x]
// 문제유형: 수학
// 문제형태: 유한소수 판별하기

// 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수

function gcd(a, b) {
  // 유클리드 알고리즘을 사용하여 최대공약수를 구함
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function simplifyFraction(numerator, denominator) {
  // 분자와 분모의 절대값을 구함
  const absNumerator = Math.abs(numerator);
  const absDenominator = Math.abs(denominator);

  // 분자와 분모의 최대공약수를 구함
  const greatestCommonDivisor = gcd(absNumerator, absDenominator);

  // 최대공약수로 분자와 분모를 나누어 기약분수를 만듦
  const simplifiedNumerator = numerator / greatestCommonDivisor;
  const simplifiedDenominator = denominator / greatestCommonDivisor;

  // 기약분수를 반환
  return [simplifiedNumerator, simplifiedDenominator];
}

// a/b가 유한소수이면 1을, 무한소수라면 2를 return
function solution(a, b) {
  const [_simplifiedNumerator, simplifiedDenominator] = simplifyFraction(a, b);
  let denominator = simplifiedDenominator;

  while (denominator % 2 === 0) {
    denominator /= 2;
  }

  while (denominator % 5 === 0) {
    denominator /= 5;
  }

  if (denominator === 1) {
    return 1;
  } else {
    return 2;
  }
}
