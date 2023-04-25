// 제한시간내에 풀이 [v]
// 문제유형: 배열 인덱스
// 문제형태: 배열 회전시키기
// 소감: 다음 인덱스로 조정하는 로직이 핵심인것같다

function solution(numbers = [], direction = '') {
  const goNext = (index, type) => {
    if (type === 'right') {
      return (index + 1) % numbers.length;
    } else {
      if (index - 1 < 0) {
        return numbers.length - 1;
      }
      return (index - 1) % numbers.length;
    }
  };

  const answer = Array.from({ length: numbers.length });

  for (let i = 0; i < numbers.length; i++) {
    const nextIndex = goNext(i, direction);
    answer[nextIndex] = numbers[i];
  }

  return answer;
}

console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'));
