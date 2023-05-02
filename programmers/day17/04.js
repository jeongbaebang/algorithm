// 제한시간내에 풀이 [v]
// 문제유형: 순회
// 문제형태: 배열의 유사도

function solution(s1, s2) {
  const arr = [...s1, ...s2];
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        answer += 1;
      }
    }
  }

  return answer;
}
