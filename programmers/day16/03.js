// 제한시간내에 풀이 [v]
// 문제유형: 문자열 누적 순회
// 문제형태: 한 번만 등장한 문자

function solution(s) {
  let answer = '';
  const hash = {};

  for (x of s) {
    if (hash[x] === undefined) {
      hash[x] = 1;
    } else {
      hash[x] += 1;
    }
  }

  for ([key, value] of Object.entries(hash)) {
    if (value === 1) {
      answer += key;
    }
  }

  if (answer.length === 0) {
    return answer;
  }

  return [...answer].sort().join('');
}

solution('aaaa');
