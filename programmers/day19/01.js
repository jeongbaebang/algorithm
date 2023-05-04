// 제한시간내에 풀이 [x]
// 문제유형: 문자열 순회
// 문제형태:  문자열안에 문자열
// 소감: 좀더 간단하게 풀걸 그랬나 보다 e.g includes()

function solution(str1, str2) {
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[count]) {
      count += 1;
    } else {
      count = 0;
    }

    if (count === str2.length) {
      return 1;
    }
  }

  return 2;
}

solution('ab6CDE443fgh22iJKlmn1o', '6CD');

function solution(quiz = []) {
  const answer = [];

  for (q of quiz) {
    for ([a, operater, b, equalsSign, result] of q.split(' ')) {
      if (operater === '-') {
        answer.push(+a - +b == result ? 'O' : 'X');
      } else {
        answer.push(+a + +b == result ? 'O' : 'X');
      }
    }
  }

  return answer;
}
