// 제한시간내에 풀이 [x]
// 문제유형: 구현
// 문제형태: 치킨 쿠폰
// 소감: 재귀로 문제를 해결했다

function solution(chicken) {
  let answer = 0;

  function recursive(chicken) {
    if (chicken <= 0 || Math.floor(chicken / 10) <= 0) return answer;

    let serviceChicken = Math.floor(chicken / 10);
    answer += serviceChicken;
    coupon = Math.floor(chicken % 10);

    return recursive(serviceChicken + coupon);
  }

  return recursive(chicken);
}

console.log(solution(1081));
console.log(solution(100));
