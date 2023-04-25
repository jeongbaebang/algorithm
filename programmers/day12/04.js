// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 팩토리얼
// 소감: 큰 값의 경우에는 캐싱작업으로 최적화를 해주면 좋겠다

function factorial(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return n * factorial(n - 1);
}

function solution(n) {
  let answer = 0;

  while (factorial(answer) !== n) {
    answer += 1;

    if (factorial(answer + 1) > n) {
      break;
    }
  }

  return answer;
}

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// 이전에 구현된 방식은 작은 입력값에 대해서는 잘 작동하지만, 큰 입력값에 대해서는 계산 시간이 오래 걸릴 수 있습니다. (10!)
// 팩토리얼은 큰 수로 갈수록 급격하게 커지기 때문에, 이를 이용하여 빠르게 최대 팩토리얼을 구할 수 있습니다.

const cache = {};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (cache[n]) {
    return cache[n];
  }

  const result = n * factorial(n - 1);
  cache[n] = result;
  return result;
}
