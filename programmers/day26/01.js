// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 문자열 밀기

function solution(a = '', b = '') {
  const answer = [];
  const lastIndex = a.length - 1;
  const aIndex = Array.from({ length: a.length }, (_, i) => i);
  const arr = [];

  answer.push(a);
  arr.push([...aIndex]);

  for (let i = 0; i < aIndex.length - 1; i++) {
    let str = '';
    const index = [];
    // 내부 인덱스 순회
    for (let j = 0; j < aIndex.length; j++) {
      if (arr[i][j] <= 0) {
        str += a[lastIndex];
        index.push(lastIndex);
      } else {
        str += a[arr[i][j] - 1];
        index.push(arr[i][j] - 1);
      }
    }
    answer.push(str);
    arr.push(index);
  }

  return answer.indexOf(b);
}

function solution(a = '', b = '') {
  const answer = [a];
  const length = a.length;
  const lastIndex = length - 1;
  const aIndex = [...Array(length).keys()];

  for (let i = 0; i < length - 1; i++) {
    const str = aIndex
      .map((val) => (val <= 0 ? lastIndex : val - 1))
      .map((val) => a[val])
      .join('');

    answer.push(str);

    //배열요소 회전
    aIndex.splice(0, 0, aIndex.pop());
  }

  return answer.indexOf(b);
}

solution('hello', 'ohell');
solution('apple', 'elppa');
solution('atat', 'tata');
solution('abc', 'abc');
