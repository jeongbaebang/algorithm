// 제한시간내에 풀이 [v]
// 문제유형: 문자열 치환
// 문제형태: 인덱스 바꾸기
// 소감: 구조분해 할당으로 값을 치환하는 방식으로 적용해 봐야겠다
// [4, 3] = [3, 4];
function solution(my_string = '', num1 = 0, num2 = 0) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += my_string.slice(num2, num2 + 1);
    } else if (i === num2) {
      answer += my_string.slice(num1, num1 + 1);
    } else {
      answer += my_string[i];
    }
  }

  return answer;
}

solution('hello', 1, 2);

// other solution
function solution(my_string, num1, num2) {
  my_string = my_string.split('');

  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];

  return my_string.join('');
}
