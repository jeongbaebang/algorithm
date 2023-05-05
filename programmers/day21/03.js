// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 최댓값 만들기(2)

function solution(numbers) {
  const length = numbers.length;
  let flag = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (flag === j) continue;
      const result = numbers[i] * numbers[j];

      max = Math.max(max, result);
    }

    flag += 1;
  }

  return max;
}

solution([1, 2, -3, 4, -5]);

// other solution
function solutoon(numbers = []) {
  const sorted = numbers.sort((a, b) => a - b);

  return Math.max(
    sorted[0] * sorted[1],
    sorted[sorted.length - 1],
    sorted[sorted.length - 2]
  );
}
