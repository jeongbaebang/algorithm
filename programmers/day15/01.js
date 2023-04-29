// 제한시간내에 풀이 [x]
// 문제유형: 순회
// 문제형태: 가까운 수
// 소감: 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 하는 로직을 풀지못해따
// 한개의 일은 하나의 역할만 수행하는게 제일 베스트 같다

function solution(array = [], n = 1) {
  let answer = 0;
  const calc = array.map((num) => Math.abs(num - n));
  let min = calc[0];

  for (let i = 1; i < calc.length; i++) {
    if (calc[i] < min) {
      min = calc[i];
      answer = array[i];
    }
  }

  return answer;
}

function solution(array = [], n = 1) {
  let answer = array[0];
  let minDiff = Math.abs(n - array[0]);

  for (let i = 1; i < array.length; i++) {
    const diff = Math.abs(n - array[i]);

    if (diff < minDiff) {
      answer = array[i];
      minDiff = diff;
    } else if (diff === minDiff && array[i] < answer) {
      answer = array[i];
    }
  }

  return answer;
}
