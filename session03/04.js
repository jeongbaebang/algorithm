// 제한시간내에 풀이 [x]
// 문제유형: 문자열 탐색
// 문제형태: 문자거리
// 소감: 좀더 다양한 방식으로 접근해 봐야겠다

// 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력

function solution(s, t) {
  let p = 1000;
  let length = s.length;
  let answer = [];

  for (let i = 0; i < length; i++) {
    if (s[i] === t) {
      p = 0;
      answer.push(p);
    } else {
      p += 1;
      answer.push(p);
    }
  }

  p = 1000;

  for (let i = length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
      answer[i] = 0;
    } else {
      p += 1;
      answer[i] = Math.min(answer[i], p);
    }
  }
}

solution('teachermode', 'e');
