// 제한시간내에 풀이 [v]
// 문제유형: 1차원 탐색
// 문제형태: 보이는 학생

// 선생님이 볼 수 있는 학생의 수를 구하는 프로그램
// 앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.
function solution(arr = []) {
  let max = arr[0];
  let answer = 1;

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      answer += 1;
    }
  }

  return answer;
}

solution([130, 135, 148, 140, 145, 150, 150, 153]);

// 다른 솔류션
function solution(arr = []) {
  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
}
