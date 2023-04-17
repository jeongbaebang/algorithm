// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 연필 개수

// 1다스 === 12자루
// 학생 1명당 1자루씩 제공

function solution(n) {
  if (n <= 12) {
    return 1;
  }

  if (n % 12 === 0) {
    return n / 12;
  } else {
    return Math.floor(n / 12) + 1;
  }
}

// 다른 답안
function solution2(n) {
  let answer = Math.ceil(n / 12);

  return answer;
}
