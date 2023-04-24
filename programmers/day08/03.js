// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: 진료순서 정하기
// 소감: 플레그로 특정 값을 고정시키고 순회를 돌리는 형태를 기억해야겠다

function solution(emergency) {
  const answer = Array.from({ length: emergency.length }).fill(1);

  for (let i = 0; i < emergency.length; i++) {
    const valuei = emergency[i];

    for (let j = 0; j < emergency.length; j++) {
      const valuej = emergency[j];

      if (valuei < valuej) {
        answer[i] += 1;
      }
    }
  }

  return answer;
}

// 다른 솔류션
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

solution([30, 10, 23, 6, 100]);
