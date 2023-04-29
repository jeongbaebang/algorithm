// 제한시간내에 풀이 [v]
// 문제유형: 1차원 배열 탐색
// 문제형태: 큰 수 출력하기
// 소감: (arr[i] > arr[i - 1]) 형태를 기억하자 이런식으로 로직을 작성한다면
// 마지막 요소까지 돌릴수 있다

// 자신의 바로 앞 수보다 큰 수만 출력
function solution(arr = []) {
  const answer = [];

  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i + 1] && arr[i] < arr[i + 1]) {
      answer.push(arr[i + 1]);
    }
  }

  console.log(answer);
}

solution([7, 3, 9, 5, 6, 12]);

// other solution
function solution(arr = []) {
  const answer = [];

  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
}
