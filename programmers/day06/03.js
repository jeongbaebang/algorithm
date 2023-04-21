// 제한시간내에 풀이 [v]
// 문제유형: 문자열, 반복문, 출력, 배열, 조건문
// 문제형태: 짝수 홀수 개수 출력하기

function solution(num_list) {
  let [even, odd] = [0, 0];

  for (num of num_list) {
    if (num % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }

  return [even, odd];
}

// new solution
function solution(num_list) {
  const answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
