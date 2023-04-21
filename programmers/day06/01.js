// 제한시간내에 풀이 [v]
// 문제유형: 문자열, 반복문, 출력, 배열, 조건문
// 문제형태: 문자열 뒤집기

function solution(my_string) {
  const length = my_string.length;
  let answer = '';

  for (let i = length; i > 0; i--) {
    answer += my_string[i - 1];
  }

  return answer;
}
