// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 삼각형의 완성조건 (1)

function solution(sides = []) {
  const max = Math.max(...sides);

  sides.splice(sides.indexOf(max), 1);

  const sum = sides.reduce((a, b) => a + b, 0);

  return sum < max ? 1 : 2;
}

solution([199, 72, 222]);

// other solution
function solution(sides) {
  sides = sides.sort((a, b) => a - b);

  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
