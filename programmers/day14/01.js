// 제한시간내에 풀이 [x]
// 문제유형: 순회
// 문제형태: 컨트롤 제트
// 소감: 두개의 영역을 체크하라는 문제같다
// 스택 자료구조로 구현해도 좋겠다

function solution(s) {
  const arr = s.split(' ');
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'Z' && arr[i + 1] !== 'Z') {
      answer.push(Number(arr[i]));
    }
  }

  const sum = answer.reduce((a, b) => a + b, 0);

  return sum;
}

// 다른 솔류션
function solution(s) {
  const stack = [];

  s.split(' ').forEach((target) => {
    if (target === 'Z') {
      stack.pop();
    } else {
      stack.push(Number(target));
    }
  });
}

solution('10 Z 20 Z 1');
