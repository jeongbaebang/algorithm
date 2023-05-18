// 제한시간내에 풀이 [v]
// 문제유형: 블루투포스
// 문제형태: k번쨰 큰 수

// 1부터 100사이의 자연수가 적힌 N장의 카드
// 같은 숫자의 카드가 여러장 있을 수 있습니다.
// 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록
// 3장을 뽑을 수 있는 모든 경우를 기록
// 기록한 값 중 K번째로 큰 수를 출력

function solution(arr, n) {
  const answer = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        answer.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  answer.sort((a, b) => b - a);

  return Array.from(new Set(answer))[n - 1];
}
