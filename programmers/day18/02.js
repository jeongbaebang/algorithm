// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: n의 배수 고르기

function solution(n, numlist) {
  return numlist.filter((num) => {
    return num % n === 0;
  });
}
