// 제한시간내에 풀이 [x]
// 문제유형: 순회
// 문제형태: 숨어있는 숫자의 덧셈 (2)
// 소감: 변수에 숫자를 더하는 부분이 잘못됐다

function solution(my_string) {
  let answer = 0;
  let reduce = 0;

  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(Number(my_string[i]))) {
      reduce = reduce * 10 + Number(my_string[i]);

      if (isNaN(Number(my_string[i + 1]))) {
        answer += reduce;
        reduce = 0;
      }
    }
  }

  return answer;
}
