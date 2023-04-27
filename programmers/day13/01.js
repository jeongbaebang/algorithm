// 제한시간내에 풀이 [v]
// 문제유형: 문자열
// 문제형태: 모음 제거
// 소감:

function solution(my_string) {
  let answer = '';
  const vowel = ['a', 'e', 'i', 'o', 'u'];

  for (str of my_string) {
    if (!vowel.includes(str)) {
      answer += str;
    }
  }

  return answer;
}
