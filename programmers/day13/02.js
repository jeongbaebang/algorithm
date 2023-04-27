// 제한시간내에 풀이 [v]
// 문제유형: 문자열 순회
// 문제형태: 문자열 정렬하기 (1)

function solution(my_string) {
  const numbers = [...my_string]
    .filter((str) => {
      return !Number.isNaN(Number(str));
    })
    .map((str) => Number(str));
  const sorted = numbers.sort((a, b) => a - b);

  return sorted;
}

console.log(solution('hi12392'));
