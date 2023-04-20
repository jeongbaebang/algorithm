// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 연도 구하기
// 소감: 태어난 연도를 구하는 공식 -> 패턴을 빠르게 찾는게 관건이었다

function solution(age) {
  const year = 2023;

  return year - age + 1;
}

console.log(solution(31));
