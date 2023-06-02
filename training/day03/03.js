// 제한시간내에 풀이 [v]
// 문제유형: 연산
// 문제형태: 문자열 곱하기

function solution(my_string, k) {
  var answer = '';

  for (let i = 0; i < k; i++) {
    answer += my_string;
  }

  return answer;
}
