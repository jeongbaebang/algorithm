// 제한시간내에 풀이 [v]
// 문제유형: 연산
// 문제형태: 문자열 섞기

// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return

function solution(str1 = '', str2 = '') {
  var answer = '';

  for (let i = 0; i < str1.length; i++) {
    answer += str1[i];
    answer += str2[i];
  }

  return answer;
}
