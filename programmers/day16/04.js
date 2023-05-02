// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 약수구하기

/**
    - 약수는 어떤 수를 나누어 떨어지게 하는 수
    - 어떤 수의 약수를 구하는 방법은 그 수를 1부터 차례대로 나누어 떨어지는지 확인하는 것
    - 1과 자기 자신은 항상 약수가 되기 때문에, 나머지 수들 중에서 나누어 떨어지는 수를 찾으면된다
 */
function solution(n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }

  return answer;
}

function solution(n) {
  const answer = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer.push(i);

      if (i !== n / i) {
        answer.push(n / i);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
