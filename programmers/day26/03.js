// 제한시간내에 풀이 [x]
// 문제유형: 수학
// 문제형태: 연속된 수의 합

function solution(num, total) {
  const numArr = Array.from({ length: num }, (_, i) => i);
  const sum = numArr.reduce((a, b) => a + b);

  return numArr.map((n) => n - (sum - total) / num);
}

function solution(num, total) {
  const result = [];
  let startNum = Math.floor(total / num) - Math.floor(num / 2);
  let sum = 0;

  if (startNum < 0) {
    startNum = 0;
  }

  for (let i = 0; i < num; i++) {
    result.push(startNum + i);
    sum += startNum + i;
  }

  const diff = total - sum;

  for (let i = 0; i < num; i++) {
    result[i] += Math.floor(diff / num);
    if (i < diff % num) {
      result[i]++;
    }
  }

  return result;
}

solution(5, 5);
