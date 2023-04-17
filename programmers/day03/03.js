// 제한시간내에 풀이 [x]
// 문제유형: 구현
// 문제형태: 최빈값 구하기

function solution3(array) {
  const hash = {};

  array.forEach((itme) => {
    if (hash[itme] === undefined) {
      hash[itme] = 1;
    } else {
      hash[itme] += 1;
    }
  });

  let count = 0;
  const values = Object.values(hash);
  const max = Math.max(...values);
  values.forEach((item) => {
    if (item !== 1) {
      count += 1;
    }
  });

  if (array.length === 1) {
    return 1;
  }

  if (count !== 1) {
    return -1;
  } else {
    return max;
  }
}

function solution(array) {
  const counter = {};
  let maxCount = 0;
  let mode = -1;

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (!counter[value]) {
      counter[value] = 1;
    } else {
      counter[value] += 1;
    }

    if (counter[value] > maxCount) {
      maxCount = counter[value];
      mode = value;
    } else if (counter[value] === maxCount) {
      mode = -1;
    }
  }

  return mode;
}

solution([1, 2, 3, 3, 3, 4]);
