// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 2차원으로 만들기

function solution(num_list = [], n) {
  const answer = [];
  const count = num_list.length / n;
  let fleg = 0;

  for (let i = 0; i < count; i++) {
    answer.push([]);

    for (let j = fleg; j < fleg + n; j++) {
      answer[i].push(num_list[j]);
    }

    fleg += n;
  }

  return answer;
}

solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3);
