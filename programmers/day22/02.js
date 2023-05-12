// 제한시간내에 풀이 [x]
// 문제유형: 2차원 탐색
// 문제형태: 안전지대

const dx = [-1, 0, 1, 0, -1, 1, -1, 1];
const dy = [0, 1, 0, -1, -1, 1, 1, -1];

function solution(arr) {
  const length = arr.length;
  let answer = length * length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[i][j] === 1) {
        answer -= 1;
        continue;
      }

      for (let k = 0; k < 8; k++) {
        const nx = i + dx[k]; // 행
        const ny = j + dy[k]; // 열

        // 경계선 구분
        if (nx >= 0 && nx < length && ny >= 0 && ny < length) {
          if (arr[nx][ny] === 1) {
            answer -= 1;
            break;
          }
        }
      }
    }
  }

  return answer;
}

// 12 - 1 - 3 - 5 - 6 - 7 - 9 - 11
const dx1 = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy2 = [0, 1, 1, 1, 0, -1, -1, -1];

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]);
