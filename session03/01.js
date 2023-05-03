// 제한시간내에 풀이 [v]
// 문제유형: 문자열 탐색
// 문제형태: 회문문자열
// s[len - i - 1] 형태로 반대 인덱스 접근법을 기억하자

// 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력

function solution(str = '') {
  let answer = 'YES';
  const lowerCase = str.toLowerCase();
  let reverse = '';

  for (let i = lowerCase.length - 1; i >= 0; i--) {
    reverse += lowerCase[i];
  }

  console.log(lowerCase === reverse);

  return answer;
}

function solution(s) {
  s = s.toLowerCase();

  let answer = 'Yes';
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) {
      return 'No';
    }
  }

  return answer;
}
