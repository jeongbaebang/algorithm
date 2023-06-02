// 제한시간내에 풀이 [v]
// 문제유형: 연산
// 문제형태: 문자 리스트를 문자열로 변환하기

function join(arr = []) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }

  return str;
}

function solution(arr = []) {
  return join(arr);
}
