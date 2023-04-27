// 제한시간내에 풀이 [v]
// 문제유형: 문자열 순회
// 문제형태: 숨어있는 숫자의 덧셈 (1)

function solution(my_string) {
  let answer = 0;

  for (x of my_string) {
    const num = Number(x);

    if (!Number.isNaN(num)) {
      answer += num;
    }
  }

  return answer;
}
