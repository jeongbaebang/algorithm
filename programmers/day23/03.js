// 제한시간내에 풀이 [x]
// 문제유형: 순회, 수학, 구현
// 문제형태: 겹치는 선분의 길이

function solution(lines) {
  const visited = lines.reduce((a, [x, y]) => {
    for (let i = Math.min(x, y) + 1; i <= Math.max(x, y); i++) {
      a[i] = a[i] ? a[i] + 1 : 1;
    }

    return a;
  }, {});

  const answer = Object.values(visited).filter((v) => v > 1).length;

  return answer;
}

solution([
  [0, 2],
  [-3, -1],
  [-2, 1],
]);

solution([
  [-1, 1],
  [1, 3],
  [3, 9],
]);

solution([
  [0, 5],
  [3, 9],
  [1, 10],
]);
