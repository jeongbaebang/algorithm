// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 가위 바위 보

// 가위는 2 -> 0
// 바위는 0 -> 5
// 보는 5 -> 2
// 모두 이기는 경우를 순서대로 나타낸 문자열을 return

function solution(rsp) {
  let answer = '';
  const data = {
    2: 0,
    0: 5,
    5: 2,
  };

  for (z of rsp) {
    answer += data[z];
  }

  return answer;
}
