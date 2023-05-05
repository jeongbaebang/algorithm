// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 직사각형 넓이
// 소감: 직사각형 넓이공식만 알면 쉽게 푸는 문제

// 직사각형의 넓이를 return

// 직사각형 넓이 공식
// 1. x중에서 가장 큰값 - x중에서 가장 작은 값 => x의 길이
// 2. y중에서 가장 큰값 - y중에서 가장 작은 값 => y의 길이
// 3. x * y

function solution(dots) {
  let maxX = Number.MIN_SAFE_INTEGER;
  let minX = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;

  for (const [x, y] of dots) {
    maxX = Math.max(maxX, x);
    minX = Math.min(minX, x);

    maxY = Math.max(maxY, y);
    minY = Math.min(minY, y);
  }

  let x = maxX - minX;
  let y = maxY - minY;

  return x * y;
}
