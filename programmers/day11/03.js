// 제한시간내에 풀이 [x]
// 문제유형: 수학, 구현
// 문제형태: 공 던지기
// 소감: 모듈러 연산이라는 것을 알아보자

function solution(numbers = [], k = 0) {
  const goNext = (index) => {
    return (index + 2) % numbers.length;
  };
  let currentIndex = 0;

  for (let i = 0; i < k - 1; i++) {
    currentIndex = goNext(currentIndex);
  }

  return numbers[currentIndex];
}

solution([1, 2, 3, 4, 5, 6], 5);
