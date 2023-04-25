// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 최댓값 구하기

function solution(numbers) {
  const length = numbers.length;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const currentValue = numbers[i] * numbers[j];

      // 중복 원소 제거 && 크기 비교
      if (i !== j && currentValue > max) {
        max = currentValue;
      }
    }
  }

  return max;
}
