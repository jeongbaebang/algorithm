// 제한시간내에 풀이 [v]
// 문제유형: 조건문
// 문제형태: 각도기

function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else if (angle === 180) {
    return 4;
  }
}

// 다른 솔류션
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
