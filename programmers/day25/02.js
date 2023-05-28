// 제한시간내에 풀이 [x]
// 문제유형: 메소드 활용
// 문제형태: 이진수 더하기

function solution(bin1, bin2) {
  let result = ''; // 덧셈 결과를 저장할 문자열
  let carry = 0; // 자리 올림을 저장할 변수

  // 두 이진수의 길이를 맞춰주기 위해 0을 채워줍니다.
  while (bin1.length < bin2.length) {
    bin1 = '0' + bin1;
  }
  while (bin1.length > bin2.length) {
    bin2 = '0' + bin2;
  }

  // 뒤에서부터 한 자리씩 덧셈을 진행합니다.
  for (let i = bin1.length - 1; i >= 0; i--) {
    const digit1 = parseInt(bin1[i]); // bin1의 현재 자리 숫자
    const digit2 = parseInt(bin2[i]); // bin2의 현재 자리 숫자
    const sum = digit1 + digit2 + carry; // 현재 자리 덧셈 결과

    result = (sum % 2) + result; // 현재 자리의 결과를 결과 문자열의 앞에 추가
    carry = Math.floor(sum / 2); // 다음 자리로 올림 처리
  }

  // 마지막 올림이 있는 경우 처리
  if (carry > 0) {
    result = carry + result;
  }

  return result;
}

console.log(solution('1001010', '11'));
