// 제한시간내에 풀이 [v]
// 문제유형: 문자열 탐색
// 문제형태: 숫자만 추출
// 소감: answer = answer * 10 + Number(x); 형태도 있다

function solution(str = '') {
  str = str.replace(/[^0-9]/g, '');

  console.log(Number(str));
}

solution('g0en2T0s8eSoft');
solution('tge0a1h205er');

function solution(str) {
  let answer = 0;

  for (x of str) {
    if (!isNaN(x)) {
      answer = answer * 10 + Number(x);
    }
  }

  console.log(answer);
}
