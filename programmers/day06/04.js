// 제한시간내에 풀이 [v]
// 문제유형: 문자열, 반복문, 출력, 배열, 조건문
// 문제형태: 문자 반복 출력하기
// 소감: 저수준 형태의 코드를 짜도 좋고, 고차함수를 활용해서 문제를 해결해도 좋을것같다

function solution(my_string, n) {
  let answer = '';

  for (str of my_string) {
    for (let i = 0; i < n; i++) {
      answer += str;
    }
  }

  return answer;
}
