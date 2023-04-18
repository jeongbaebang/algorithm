// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 배열의 평균값 구하기

function solution(numbers) {
  const length = numbers.length;
  let reduce = 0;

  for (let i = 0; i < length; i++) {
    reduce += numbers[i];
  }

  console.log(reduce / length);
  return reduce / length;
}
