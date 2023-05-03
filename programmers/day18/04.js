// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: OX퀴즈
// 소감: 문제를 잘 읽고 형식에 맞게 풀면 되겠다

function solution(quiz = []) {
  const answer = [];

  for (q of quiz) {
    const [a, operater, b, equalsSign, result] = q.split(' ');
    if (operater === '-') {
      answer.push(+a - +b == result ? 'O' : 'X');
    } else {
      answer.push(+a + +b == result ? 'O' : 'X');
    }
  }

  return answer;
}
