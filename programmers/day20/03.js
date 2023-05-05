// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: 중복된 숫자 개수

function solution(array, n) {
  let answer = 0;

  for (const x of array) {
    if (x === n) {
      answer += 1;
    }
  }

  return answer;
}
