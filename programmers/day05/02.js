// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 수학 (몫, 나머지 구하기)
// 소감: 나누기를 할때는 소수점을 잘 처리해야겠다

// coffee = 5,500;
// 최대로 마실 수 있는 잔수와 남는 돈을 배열로 반환

function solution(money) {
  const coffee = 5500;

  return [Math.floor(money / coffee), money % coffee];
}
