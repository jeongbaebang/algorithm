// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: 외계어 사전

function solution(spell = [], dic = []) {
  const length = spell.length;

  for (const d of dic) {
    let count = 0;

    for (const s of spell) {
      if (d.includes(s)) {
        count += 1;
      }
    }

    if (count === length) {
      return 1;
    }
  }

  return 2;
}

solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo']);
