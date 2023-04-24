// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 홀수

// 1. 홀수인 자연수들을 모두 골라 그 합
// 2. 고른 홀수들 중 최소값
function solution(arr = []) {
  let answer = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (num of arr) {
    if (num % 2 !== 0) {
      answer += num;

      if (num < min) {
        min = num;
      }
    }
  }

  return [answer, min];
}

solution([12, 77, 38, 41, 53, 92, 85]);
