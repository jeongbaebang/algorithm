// 제한시간내에 풀이 [v]
// 문제유형: 문자열
// 문제형태: 특정 문자 제거하기

function solution(my_string, letter) {
  let answer = '';

  for (char of my_string) {
    if (char !== letter) {
      answer += char;
    }
  }

  return answer;
}
