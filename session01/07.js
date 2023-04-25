// 제한시간내에 풀이 [x]
// 문제유형: 구현
// 문제형태: 작은 난쟁이
// 소감: 문제를 좀더 잘 읽으면 좋겠다 (핵심을 좀더 빠르고 확실하게 파악하자)

function solution(arr = []) {
  const sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(i, 1);

        const answer = [...arr];

        answer.splice(j, 1);

        return answer;
      }
    }
  }
}

const answer = solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);
console.log(answer);
