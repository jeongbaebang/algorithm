// 제한시간내에 풀이 [x]
// 문제유형: 구현
// 문제형태: 할인율 구하기
// 소감: 할인율 구하기 공식은 Math.floor(price * 0.95), price - (price * 0.5)

// 다른 답안
function solution(price) {
  let discountRate = 0;

  if (price >= 500000) {
    discountRate = 0.2;
  } else if (price >= 300000) {
    discountRate = 0.1;
  } else if (price >= 100000) {
    discountRate = 0.05;
  }

  const discountedPrice = price * (1 - discountRate);

  return Math.floor(discountedPrice);
}
