// 제한시간내에 풀이 [x]
// 문제유형: 문자열 순회
// 문제형태: 문자열 계산하기
// 소감: 생각보다 쉽지 않았다 패턴을 빠르게 파악하고 풀었으면 어떨지

// 수식을 계산한 값을 return
// return type 은 정수형

function solution(my_string = '') {
  const tokens = my_string.split(' ');
  let result = parseInt(tokens[0]);

  for (let i = 0; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseInt(tokens[i + 1]);

    if (operator === '+') {
      result += operand;
    } else if (operand === '-') {
      result -= operand;
    }
  }

  return result;
}

solution('3 - 4 + 4');
