// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 7의배수

function solution(array = []) {
  let answer = 0;

  for (let x of array) {
    let tmp = x;

    while (tmp) {
      const result = tmp % 10;

      if (result !== 0 && result % 7 === 0) {
        answer += 1;
      }

      tmp = Math.floor(tmp / 10);
    }
  }

  return answer;
}

solution([10, 29, 71717]);
