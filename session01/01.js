// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 하나의 길이가 나머지 두 개의 길이를 합친 것보다 작은 경우를 판별.

function solution(a, b, c) {
  let answer = 'Yes';

  if (a + b < c) answer = 'No';
  if (a + c < b) answer = 'No';
  if (c + b < a) answer = 'No';

  console.log(answer);
}

solution(6, 7, 11); // Yes
solution(13, 33, 17); // No
