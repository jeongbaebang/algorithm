// 제한시간내에 풀이 [x]
// 문제유형: 수학 약수, 합성수
// 문제형태: 합성수 구하기

function solution(n) {
  let count = 0;

  for (let i = 4; i <= n; i++) {
    let divisorCount = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisorCount += 2;
      }
    }

    // 제곱근이 정수인 경우 약수의 개수를 중복해서 더해주는 문제를 해결하기 위해, 마지막에 Math.sqrt(i)가 정수인지 확인하고 그 경우 divisorCount에서 1을 빼주도록 구현
    if (Math.sqrt(i) % 1 === 0) {
      divisorCount -= 1;
    }

    if (divisorCount >= 3) {
      count += 1;
    }
  }

  return count;
}

solution();
