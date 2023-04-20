// 제한시간내에 풀이 [v]
// 문제유형: 배열
// 문제형태: 배열 뒤집기
// 소감: 요소의 인덱스는 i - 1을 통해서 접근해야 한다

function solution(num_list) {
  const answer = [];

  for (let i = num_list.length; i > 0; i--) {
    const value = num_list[i - 1];

    answer.push(value);
  }

  return answer;
}

solution([1, 2, 3, 4, 5]);
