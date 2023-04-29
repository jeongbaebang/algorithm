// 제한시간내에 풀이 [v]
// 문제유형:  1차원 탐색
// 문제형태: 가위 바위 보
// 소감: 경우를 따질떄는 기준을 뭘로 잡아야할지가 제일 중요하다

// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보
// 각 회를 누가 이겼는지 출력하는 프로그램
// 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력
// 1 -> 3
// 2 -> 1
// 3 -> 2
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      answer.push('D');

      continue;
    }

    if (arr1[i] === 1) {
      if (arr2[i] === 3) {
        answer.push('A');
      } else {
        answer.push('B');
      }
    }

    if (arr1[i] === 2) {
      if (arr2[i] === 1) {
        answer.push('A');
      } else {
        answer.push('B');
      }
    }

    if (arr1[i] === 3) {
      if (arr2[i] === 2) {
        answer.push('A');
      } else {
        answer.push('B');
      }
    }
  }
  console.log(answer);
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);

// other solution
function solution(a, b) {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += 'D' + ' ';
    else if (a[i] === 1 && b[i] === 3) answer += 'A' + ' ';
    else if (a[i] === 2 && b[i] === 1) answer += 'A' + ' ';
    else if (a[i] === 3 && b[i] === 2) answer += 'A' + ' ';
    else answer += 'B' + ' ';
  }
}
