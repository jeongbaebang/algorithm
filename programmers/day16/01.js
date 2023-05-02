// 제한시간내에 풀이 [v]
// 문제유형: 문자열 치환
// 문제형태: 영어가 싫어요
// 소감: 정규식, replace, replaceAll 메소드를 활용하는 문제같다
// 너무 어렵게 생각하지말고 최대한 문제가 풀리는 쪽으로 생각하는게 제일 좋을것같다.

function solution(numbers = '') {
  let answer = numbers;
  const data = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for ([key, value] of Object.entries(data)) {
    answer = answer.replaceAll(key, value);
  }

  return answer;
}
