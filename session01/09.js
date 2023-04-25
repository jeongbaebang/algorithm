// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 문자 찾기

// 특정문자가 입력받은 문자열에 몇 개 존재하는지
function solution(str = '', target = '') {
  let answer = 0;

  for (s of str) {
    if (s === target) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
