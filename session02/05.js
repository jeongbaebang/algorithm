// 제한시간내에 풀이 [x]
// 문제유형: 1차원 탐색
// 문제형태: 등수 구하기
// 소감:

// 학생의 등수를 입력된 순서대로 출력
// 같은 점수가 입력될 경우 높은 등수로 동일 처리

function solution(arr) {
  let answer = Array.from({ length: arr.length }, () => 1);
  let count = 1;
  let max = Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // 같은 점수가 입력될 경우 높은 등수로 동일 처리
      if (arr[i] === max) {
        answer[i] = 1;
      } else if (arr[i] < arr[j]) {
        count += 1;
        answer[i] = count;
      }
    }
    count = 1;
  }

  console.log(answer);
}

solution1([87, 89, 92, 100, 76]); // 4, 3, 2, 1, 5
solution1([87, 100, 100, 100, 76]); // 4, 1, 1, 1, 5

// other solution
function solution1(arr = []) {
  const answer = Array.from({ length: arr.length }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`${arr[i]} vs ${arr[j]}`);
      if (arr[j] > arr[i]) {
        answer[i] += 1;
      }
    }
  }

  console.log(answer);
}
