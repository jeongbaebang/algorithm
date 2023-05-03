// 제한시간내에 풀이 [x]
// 문제유형: 문자열 탐색
// 문제형태: 유요한 팰린드롬
// 소감: 정규표현식으로 값을 필터링하는 방법도 생각해보자

// 알파벳만 가지고 회문을 검사
function solution(arr = []) {
  let answer = 'Yes';
  const target = arr.map((str) => {
    let s = '';

    for (x of str.toLowerCase()) {
      if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
        s += x;
      }
    }

    return s;
  });

  const len = target.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    const s1 = target[i];
    const s2 = target[len - i - 1];

    if (s1.length !== s2.length) {
      return 'No';
    }

    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[s1.length - i - 1]) {
        return 'No';
      }
    }
  }

  return answer;
}

solution(['found7', 'time:', 'study;', 'Yduts;', 'emit', '7Dnuof']);

function solution(arr) {
  let answer = 'Yes';
  s = s.toLowerCase().replace(/[^a-z]/g, '');

  if (s.split('').reverse().join('') !== s) {
    answer = 'No';
  }

  return answer;
}
