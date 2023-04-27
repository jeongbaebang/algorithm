// 제한시간내에 풀이 [v]
// 문제유형:  크기 비교 (문자열)
// 문제형태: 대문자 찾기

function solution(str) {
  let answer = '';
  let max = Number.MIN_SAFE_INTEGER;

  for (x of str) {
    const length = x.length;

    if (length > max) {
      max = length;
      answer = x;
    }
  }

  console.log(answer);
  return answer;
}

solution(['teacher', 'time', 'student', 'beautiful', 'good']);
