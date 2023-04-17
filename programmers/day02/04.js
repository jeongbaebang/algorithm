// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 배열 두 배 만들기

function solution(numbers) {
  const DOUBLE = 2;

  return numbers.map((num) => {
    return num * DOUBLE;
  });
}
