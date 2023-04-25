// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 대 소문자 구분하기
// 소감: x === x.toUpperCase() 형태의 로직도 생각하자

// 65 - 90 대문자
// 97 - 122 소문자
function solution(str = '') {
  let answer = 0;

  for (s of str) {
    const char = s.charCodeAt();

    if (char >= 65 && char <= 90) {
      answer += 1;
    }
  }

  console.log(answer);
}

solution('KoreaTimeGood');

// other solutin
function solution(s) {
  let answer = 0;

  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer += 1;
    }
  }

  return answer;
}
