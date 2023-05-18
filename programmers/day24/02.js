// 제한시간내에 풀이 [x]
// 문제유형: 순회, 구현
// 문제형태: 등수 매기기

function solution1(score) {
  const averageScores = score.map(([eng, math]) => (eng + math) / 2); // 각 학생의 평균 점수 계산
  const sortedScores = [...averageScores].sort((a, b) => b - a); // 평균 점수를 내림차순으로 정렬한 배열 생성
  const ranks = averageScores.map((avg) => sortedScores.indexOf(avg) + 1); // 평균 점수의 등수 계산

  return ranks;
}
