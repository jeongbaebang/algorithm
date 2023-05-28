// 제한시간내에 풀이 [v]
// 문제유형: 출력, 연산
// 문제형태: 문자열 겹쳐쓰기

// my_string의 인덱스 s부터 overwrite_string의 길이만큼
// 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution

function solution(my_string, overwrite_string, s) {
  let answer = my_string.slice(0, s);
  let count = 0;

  for (let i = s; i < my_string.length; i++) {
    if (count < overwrite_string.length) {
      answer += overwrite_string[count];
      count += 1;
    } else {
      answer += my_string[i];
    }
  }

  return answer;
}
