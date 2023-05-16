// 제한시간내에 풀이 [x]
// 문제유형: 브루트포스
// 문제형태: 졸업선물

// 선생님이 가지고 있는 예산은 한정
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성
// 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다.
// 배송비는 할인에 포함되지 않습니다.
// 현재 예산으로 선물할 수 있는 최대 학생수를 출력

function solution(n, m, product = []) {
  let answer = 0;

  product.sort(([a, b], [c, d]) => {
    return a + b - (c + d);
  });

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        console.log(product[j]);
        money -= product[j][0] + product[j][1];
        cnt += 1;
      }
    }

    answer = Math.max(answer, cnt);
  }
}

solution(5, 28, [
  [10, 3],
  [6, 6],
  [2, 2],
  [4, 5],
  [4, 3],
]);
