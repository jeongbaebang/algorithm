// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 대문자 통일

// 대문자로 모두 통일
function solution(str = '') {
  let answer = '';

  for (x of str) {
    answer += x.toUpperCase();
  }

  return answer;
}

solution('ItisTimeToStudy');
