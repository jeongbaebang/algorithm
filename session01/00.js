// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 가장 작은 값을 출력하는 프로그램

function solution(a, b, c) {
  let answer = Number.MAX_SAFE_INTEGER;

  [a, b, c].forEach((num) => {
    if (answer > num) {
      answer = num;
    }
  });

  console.log(answer);
}

solution(6, 5, 1);
