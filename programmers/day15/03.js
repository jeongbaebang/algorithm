// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: 암호 해독

// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return
// cipher는 소문자와 공백으로만 구성 (공백도 하나의 문자로 취급)

function solution(cipher, code) {
  var answer = '';
  let count = 1;

  for (x of cipher) {
    if (count === code) {
      answer += x;
      count = 1;
    } else {
      count += 1;
    }
  }

  return answer;
}
