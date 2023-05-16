// 제한시간내에 풀이 [x]
// 문제유형: 구현, 순회, 정렬
// 문제형태: 특이한 정렬

// n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치
// numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return

function solution(numlist, n) {
  // 거리와 숫자를 저장하는 객체의 배열 생성
  const distances = numlist.map((num) => ({
    num: num,
    distance: Math.abs(num - n),
  }));

  // 거리를 기준으로 정렬
  distances.sort((a, b) => {
    // 거리가 같으면 더 큰 숫자가 앞으로 오도록 정렬
    if (a.distance === b.distance) {
      return b.num - a.num;
    }
    // 거리가 다르면 거리를 기준으로 정렬
    return a.distance - b.distance;
  });

  // 정렬된 결과에서 숫자만 추출하여 새로운 배열 생성
  const answer = distances.map((item) => item.num);

  return answer;
}

solution([1, 2, 3, 4, 5, 6], 4);
