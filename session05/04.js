// 제한시간내에 풀이 [x]
// 문제유형: 투포인트 알고리즘
// 문제형태: 연속부분수열2

// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지
function solution(arr = [], m = 0) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    if (sum <= m) {
      answer += 1;
      sum -= arr[lt];

      lt += 1;
    }

    while (sum <= m) {
      answer += 1;
      sum -= arr[lt];

      lt += 1;

      if (sum <= m) {
        answer += 1;
      }
    }
  }

  console.log(answer);
}

solution(
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60,
  ],
  60
);

solution([1, 2, 3], 3);
solution([1, 3, 1, 2, 3], 5);

function solution(arr, m) {
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    while (sum > m) {
      sum -= arr[lt];
      lt += 1;
    }

    answer += rt - lt + 1;
  }

  console.log(answer);
}
