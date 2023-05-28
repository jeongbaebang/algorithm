// 제한시간내에 풀이 [v]
// 문제유형: 투포인터 알고리즘
// 문제형태: 공통원소 구하기

// 두 집합의 공통 원소를 추출하여 오름차순으로 출력
function solution(n = [], m = []) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  let a = n.length;
  let b = m.length;

  n.sort((a, b) => a - b);
  m.sort((a, b) => a - b);

  console.log(n, m);

  while (p1 < a && p2 < b) {
    if (n[p1] < m[p2]) {
      p1 += 1;
    } else {
      p2 += 1;
    }

    if (n[p1] === m[p2]) {
      answer.push(n[p1]);
    }
  }

  console.log(answer);
}

solution([1, 3, 9, 5, 2, 7, 10], [3, 2, 5, 7, 8, 10]);

// other solution
function solution(arr1, arr2) {
  const answer = [];

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let p1 = (p2 = 0);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1 += 1;
      p2 += 1;
    } else if (arr1[p1] < arr2[p2]) {
      p1 += 1;
    } else {
      p2 += 1;
    }
  }

  console.log(answer);
}
