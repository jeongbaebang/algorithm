// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 가운데 문자 출력

// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램
// 단어의 길이가 짝수일 경우 가운데 2개 return
function solution(str = '') {
  let answer = '';
  const length = str.length;
  let middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    answer = str.slice(middle - 1, middle + 1);
  } else {
    answer = str.slice(middle, middle + 1);
  }

  return answer;
}

solution('good');
solution('study');
