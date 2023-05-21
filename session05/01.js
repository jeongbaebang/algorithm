// 제한시간내에 풀이 [v]
// 문제유형: 투포인트 알고리즘
// 문제형태: 배열 합치기
// 소감: 마지막 남은 요소를 어떻게 처리하는지에 대해서 생각을 못했다

function solution(arr1 = [], arr2 = []) {
  console.log([...arr1, ...arr2].sort((a, b) => a - b));
}

function solution(arr1 = [], arr2 = []) {
  const answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1]);
      p1 += 1;
    } else {
      answer.push(arr2[p2]);
      p2 += 1;
    }
  }

  while (p1 < n) {
    answer.push(arr1[p1]);
    p1 += 1;
  }

  while (p2 < n) {
    answer.push(arr2[p2]);
    p2 += 1;
  }
}

solution([1, 3, 5], [2, 3, 6, 7, 9]);
