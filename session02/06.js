// 제한시간내에 풀이 [x]
// 문제유형: 2차원 탐색
// 문제형태: 격자판 최대합
// 소감: 문제를 제대로 이해 못해서 시간안에 풀지를 못했다
// 두 대각선의 합이라고 해서 두 대각선의 값을 더했다

// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력
function solution(arr = [], n = 1) {
  let answer = 0;
  let a = 0; // 각 행
  let sumA = Number.MIN_SAFE_INTEGER;
  let b = 0; // 각 열
  let sumB = Number.MIN_SAFE_INTEGER;
  let c = 0; // 대각선 1
  let d = 0; // 대각선 2
  let cd = 0;
  for (let i = 0; i < n; i++) {
    a = 0; // 행 누적 초기화
    b = 0; // 열 누적 초기화
    c += arr[i][i];
    d += arr[n - i - 1][i];

    for (let j = 0; j < n; j++) {
      b += arr[j][i];
      a += arr[i][j];
    }

    if (a > sumA) {
      sumA = a;
    }

    if (b > sumB) {
      sumB = b;
    }
  }

  console.log(sumA, sumB, c, d);
}

solution(
  [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ],
  5
);

// other solution
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;

    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }

    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[n - i - 1][i];
  }

  answer = Math.max(answer, sum1, sum2);

  return answer;
}
