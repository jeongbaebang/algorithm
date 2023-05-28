// 제한시간내에 풀이 [x]
// 문제유형: 투포인트 알고리즘
// 문제형태: 연속부분수열1

// 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램 출력
function solution(arr = [], m = 0) {
  let lt = 0;
  let sum = 0;
  let answer = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    if (sum === m) {
      answer += 1;
      sum -= arr[lt];
      lt += 1;
    }

    while (sum >= m) {
      sum -= arr[lt];
      lt += 1;

      if (sum === m) {
        answer += 1;
      }
    }
  }
  console.log(answer);
}

solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
