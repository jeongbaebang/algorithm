// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 중복된 문자 제거
// 소감: 중복된 원소를 제거할때는 set 자료구조도 생각하자

function solution(my_string) {
  const answer = [];

  for (x of my_string) {
    if (!answer.includes(x)) {
      answer.push(x);
    }
  }
}
