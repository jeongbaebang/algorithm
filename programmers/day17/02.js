// 제한시간내에 풀이 [v]
// 문제유형: 문자열
// 문제형태: 가장 큰 수 찾기

function solution(array) {
  const answer = [Number.MIN_SAFE_INTEGER, 0];

  for (let i = 0; i < array.length; i++) {
    if (answer[0] < array[i]) {
      answer[0] = array[i];
      answer[1] = i;
    }
  }

  return answer;
}
