// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 점의 위치 구하기

// 정수 배열 dot

function isNegatize(num) {
  return num < 0 ? true : false;
}

function solution(dot = []) {
  const [x, y] = dot;

  // 제1사분면
  if (!isNegatize(x) && !isNegatize(y)) {
    return 1;
  }

  // 제2사분면
  if (isNegatize(x) && !isNegatize(y)) {
    return 2;
  }

  // 제3사분면
  if (isNegatize(x) && isNegatize(y)) {
    return 3;
  }

  // 제4사분면
  if (!isNegatize(x) && isNegatize(y)) {
    return 4;
  }
}
