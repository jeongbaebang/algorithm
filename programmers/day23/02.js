// 제한시간내에 풀이 [x]
// 문제유형: 수학
// 문제형태: 평행
// 소감: 어렵다

function solution(dots) {
  const getInclination = ([[x1, y1], [x2, y2]]) => {
    return x2 !== x1 ? (y2 - y1) / (x2 - x1) : Infinity;
  };

  const isParallel = (line1, line2) => {
    return getInclination(line1) === getInclination(line2);
  };

  return dots.some((dot) => {
    const line1 = [dots[0], dot];
    const line2 = dots.filter((dot) => !line1.includes(dot));

    return isParallel(line1, line2);
  })
    ? 1
    : 0;
}

solution([
  [3, 5],
  [4, 1],
  [2, 4],
  [5, 10],
]);

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]);
