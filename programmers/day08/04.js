// 제한시간내에 풀이 [x]
// 문제유형: 수학
// 문제형태: 두 자연수의 곱이 n이 되는 경우의 순서쌍의 개수를 구하는 문제
// 소감:

function solution(n) {
  let count = 0;

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(i, n / i);
      count++;

      if (i !== n / i) {
        console.log(n / i, i);
        count++;
      }
    }
  }

  return count;
}

solution(100);
