// 제한시간내에 풀이 [v]
// 문제유형: 완전탐색(블루투포스)
// 문제형태: 뒤집은 소수

// 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력
// 주어진 숫자가 소수인지를 확인하기 위해 2부터 숫자의 제곱근까지의 모든 수로 나누어 보는 방식
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(arr) {
  let answer = [];

  for (let num of arr) {
    let reverse = '';
    let tmp = String(num);

    for (let i = tmp.length - 1; i >= 0; i--) {
      reverse += tmp[i];
    }

    if (isPrime(Number(reverse))) {
      answer.push(Number(reverse));
    }
  }

  console.log(answer);
}

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
