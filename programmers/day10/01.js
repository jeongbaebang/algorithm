// 제한시간내에 풀이 [v]
// 문제유형: 수학
// 문제형태: 개미 군단
// 소감: 문제의 흐름대로 푼 느낌이 든다

function solution(hp) {
  const king = Math.trunc(hp / 5);
  const rest = hp - Math.trunc(hp / 5) * 5;

  if (rest >= 3) {
    const soldier = Math.trunc(rest / 3);
    const rest2 = Math.trunc(rest % 3);

    return king + soldier + rest2;
  }

  return king + rest;
}

console.log(solution(24));
