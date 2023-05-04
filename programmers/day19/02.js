// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 제곱수 판별
// 소감: 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수

// 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수

function solution(n) {
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (i * i === n) {
      return 1;
    }
  }

  return 2;
}
