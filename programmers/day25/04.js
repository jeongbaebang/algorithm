// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: k의 개수

function solution(i, j, k) {
  let answer = 0;
  k = String(k);

  for (; i <= j; i++) {
    const target = String(i);

    if (target.includes(k)) {
      if (i <= 10) {
        answer += 1;
      } else {
        const length = [...target].filter((value) => value === k).length;

        answer += length;
      }
    }
  }

  return answer;
}
