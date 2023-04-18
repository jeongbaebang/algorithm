// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 최솟값 구하기
// 소감: 한 가지 역할에는 하나의 역할만 부여하는 것이 좋다

function solution(n) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (num of n) {
    if (num < answer) {
      answer = num;
    }
  }

  return answer;
}

solution([5, 3, 7, 11, 2, 15, 17]);

// 다른 답안
function solution2(n) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  answer = min;

  return answer;
}
