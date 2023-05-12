// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 삼각형의 완성조건 (2)

function solution(sides = []) {
  var answer = 0;
  const max = Math.max(...sides);
  const min = Math.min(...sides);

  for (let i = 1; i <= max; i++) {
    if (min + i > max) {
      answer += 1;
    }
  }

  const sum = max + min;

  for (let i = max + 1; i < sum; i++) {
    answer += 1;
  }

  console.log(answer);
  return answer;
}

solution([1, 2]);
