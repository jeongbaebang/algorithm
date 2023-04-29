// 제한시간내에 풀이 [v]
// 문제유형: 1차원 탐색
// 문제형태: 점수 계산

// 1번 문제가 맞는 경우에는 1점으로 계산
// 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산
// 틀린 문제는 0점으로 계산
// 합산 출력
function solution(arr = []) {
  let answer = 0;
  let count = 0;

  for (x of arr) {
    if (x === 0) {
      count = 0;
    } else {
      count += 1;
      answer += count;
    }
  }

  console.log(answer);
}

solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
