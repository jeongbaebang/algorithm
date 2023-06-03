// 제한시간내에 풀이 [x]
// 문제유형: 수학
// 문제형태: 다음에 올 숫자

// 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
// 마지막 원소 다음으로 올 숫자를 return
// common 최소 3개 넘어온다.

// AP 또는 arithmetic sequence)은 연속하는 두 항의 차이가 모두 일정한 수열을 뜻한다.
// 등비수열 - 각 항이 초항(first term)과 일정한 비를 가지는 수열

function solution(common) {
  const isAP = common[2] - common[1] === common[1] - common[0]; // 등차(등비)의 차이를 계산합니다.

  if (isAP) {
    // 등차수열인 경우
    return common[common.length - 1] + common[1] - common[0];
  }

  // 등비수열인 경우
  return common[common.length - 1] * (common[1] / common[0]);
}
