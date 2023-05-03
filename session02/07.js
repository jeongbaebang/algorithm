// 제한시간내에 풀이 [x]
// 문제유형: 2차원 배열 탐색
// 문제형태: 봉우리
// 소감: 상하좌우는 아래형태로 순회하면서 하면 깔끔하게 돌릴수 있을듯하다
// const dx = [-1, 0, 1, 0];
// const dy = [0, 1, 0, -1];

// 상하좌우 숫자보다 큰 숫자는 봉우리 지역
// 순회

function solution1(arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let fleg = true;
      const target = arr[i][j];

      // 상
      if (arr[i - 1]) {
        if (target < arr[i - 1][j]) {
          fleg = false;
        }
      }

      //  하
      if (arr[i + 1]) {
        if (target < arr[i + 1][j]) {
          fleg = false;
        }
      }

      // 좌
      if (arr[i][j - 1]) {
        if (target < arr[i][j - 1]) {
          fleg = false;
        }
      }

      // 우
      if (arr[i][j + 1]) {
        if (target < arr[i][j + 1]) {
          fleg = false;
        }
      }

      if (fleg) {
        answer += 1;
      }
    }
  }

  console.log(answer);
}

solution([
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]);

// other solution
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        // 행좌표 구하기
        let nx = i + dx[k];
        // 열좌표 구하기
        let ny = j + dy[k];

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer += 1;
    }
  }
  console.log(answer);
}
