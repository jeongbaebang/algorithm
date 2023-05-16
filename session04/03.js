// 제한시간내에 풀이 [x]
// 문제유형: 브루트포스
// 문제형태: 멘토링

// M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
// A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
// 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력
// 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현

// 블루투포스 대표적인 문제
function solution(n, m, arr) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;

        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) {
            pi = s;
          }

          if (arr[k][s] === j) {
            pj = s;
          }
        }

        if (pi < pj) {
          cnt += 1;
        }
      }

      if (cnt === m) {
        answer += 1;
      }
    }
  }

  return answer;
}

solution(4, 3, [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
