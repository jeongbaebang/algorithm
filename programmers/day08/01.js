// 제한시간내에 풀이 [v]
// 문제유형: 배열
// 문제형태: 배열 자르기

function solution(numbers, num1, num2) {
  const answer = [];

  for (let i = num1; i <= num2; i++) {
    const value = numbers[i];

    answer.push(value);
  }

  return answer;
}
