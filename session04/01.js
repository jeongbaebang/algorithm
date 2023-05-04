// 제한시간내에 풀이 [v]
// 문제유형: 완전탐색(블루투포스)
// 문제형태: 자리수의 합
// 소감:

// 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답
function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let answer = -1;

  for (x of arr) {
    let num = x;
    let sum = 0;
    const length = String(x).length;

    for (let i = 0; i < length; i++) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }

    if (sum > max) {
      answer = num; // 현재 벨류 등록
      max = sum; // 최대값 갱신
    } else if (sum === max && answer < num) {
      answer = num;
    }
  }

  console.log(answer);
}

solution([128, 460, 603, 40, 521, 137, 123]);

// other solution
function solution(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0;
    let tmp = x;

    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max && answer < x) {
      answer = x;
    }
  }
}
