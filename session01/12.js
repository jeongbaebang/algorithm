// 제한시간내에 풀이 [v]
// 문제유형:  구현
// 문제형태: 대소문자 변환

// 대문자는 소문자로 소문자는 대문자
function solution(str) {
  let answer = '';

  for (x of str) {
    // 대문자
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }

  return answer;
}

solution('StuDY');
