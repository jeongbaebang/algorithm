// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: A를 #으로
// 소감: 문자열을 참조값이 아닌 불변형이다

// 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력
function solutiown(str = '') {
  let answer = '';

  for (s of str) {
    if (s === 'A') {
      answer += '#';
    } else {
      answer += s;
    }
  }

  return answer;
}

function solution(s) {
  return s.replace(/A/g, '#');
}
