// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: 369게임
// 소감: num % 10 으로 계산하면서 한자리씩 확인해보려고 했으나 좀더 간단하게 처리하기로 했다.

// 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임
// 쳐야할 박수 횟수를 return
function solution(order) {
  var answer = 0;
  let level = 10;
  let felg = true;

  while (felg) {
    if ((order % level) % 3 === 0) {
      answer += 1;
    }
    level *= 10;

    if (Math.trunc(order / level !== 0)) {
      felg = false;
    }
  }

  return answer;
}
