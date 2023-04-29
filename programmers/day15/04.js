// 제한시간내에 풀이 [v]
// 문제유형: 대소문자 변환
// 문제형태: 대문자와 소문자
// 소감: 아스키 코드로 기준점을 잡는것도 생각해보자

function solution(my_string) {
  let answer = '';

  for (x of my_string) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }

  return answer;
}
