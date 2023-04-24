// 제한시간내에 풀이 [v]
// 문제유형: 문자열 치환
// 문제형태: 외계행성의 나이
// 소감: 문제의 범위를 자세히 파악하면 더 좋을듯 했다 출제의 범위는 a는 0, b는 1, c는 2, ..., j는 9까지인데
// 그냥 알파벳 생각했다

function solution(age) {
  const emptyString = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(emptyString);
  const ageArray = age.toString().split(emptyString);

  return ageArray.map((num) => alphabet[num]).join(emptyString);
}
