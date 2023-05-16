// 제한시간내에 풀이 [x]
// 문제유형: 구현
// 문제형태: 저주의 숫자3

function solution(n) {
  let num = 0;
  let count = 0;

  while (count < n) {
    num += 1;

    // 3이 포함되어 잇지 않고 3의 배수가 아닌경우
    if (!String(num).includes('3') && num % 3 !== 0) {
      count += 1;
    }
  }

  return num;
}

solution(10);
