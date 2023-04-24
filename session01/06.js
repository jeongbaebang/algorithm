// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 10부제
// 소감:

// 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지
// 위반하는 자동차의 대수를 출력
function solution(day = 0, arr = []) {
  let answer = 0;

  for (car of arr) {
    const [a, b] = car.toString().split('');

    if (a == day) {
      answer += 1;
    } else if (b == day) {
      answer += 1;
    }
  }

  return answer;
}

solution(3, [25, 23, 11, 47, 53, 17, 33]);
solution(0, [12, 20, 54, 30, 87, 91, 30]);

// other solution
// 어떤 숫자를 항상 10으로 나누면 몫은 항상 일의 앞자리가 된다
// 나머지는 항상 일의 자리가 된다
function solution(day = 0, arr = []) {
  let answer = 0;

  for (let x of arr) {
    if (x % 10 === day) answer++;
  }

  return answer;
}
