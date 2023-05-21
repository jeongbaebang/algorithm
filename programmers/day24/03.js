// 제한시간내에 풀이 [x]
// 문제유형: 문자열 비교
// 문제형태: 옹알이 (1)
// 소감: 문자열 비교 처리는 정규식으로 처리하는게 제일 좋아보인다

function solution(babbling) {
  const data = ['aya', 'ye', 'woo', 'ma'];

  const convertPWordsToNum = (word) => {
    let result = word;

    for (let d = 0; d < data.length; d++) {
      result = result.replace(new RegExp(data[d], 'g'), d);
    }

    return result;
  };

  const canPronounce = (word) => {
    const result = convertPWordsToNum(word);

    return /^\d+$/.test(result);
  };

  return babbling.filter(canPronounce).length;
}

function solution(babbling) {
  let answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}

console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3
// solution(['aya', 'yee', 'u', 'maa', 'wyeoo']); // 1
