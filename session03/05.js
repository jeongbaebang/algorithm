// 제한시간내에 풀이 [v]
// 문제유형:  문자열 탐색
// 문제형태:  문자열 압축

// 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기
// 단 반복횟수가 1인 경우 생략

function solution(str) {
  let answer = '';
  let target = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (target === str[i]) {
      count += 1;
    }

    // 다음 문자열이 다른 문자열 인지
    if (target !== str[i + 1]) {
      if (count === 1) {
        answer += `${target}`;
      } else {
        answer += `${target}${count}`;
      }

      target = str[i + 1];
      count = 0;
    }
  }
  console.log(answer);
}

solution('KKHSSSSSSSE');

// other solution
function solution(s) {
  let answer = '';
  let cnt = 1;

  s = s = ' ';

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt += 1;
    } else {
      answer += s[i];
      if (cnt > 1) {
        answer += String(cnt);
        cnt = 1;
      }
    }
  }
  return answer;
}
