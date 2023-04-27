// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 중복문자제거
// 소감: new Set 자료구조를 통해서도 제거가 가능할듯싶다

// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력
function solution(str) {
  const cache = {};
  let answer = '';

  for (const x of str) {
    if (!cache[x]) {
      cache[x] = x;
      answer += x;
    }
  }

  console.log(answer);
  return answer;
}

solution('ksekkset');
