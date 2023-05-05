// 제한시간내에 풀이 [x]
// 문제유형: 순회
// 문제형태: 잘라서 배열로 저장하기

function solution(my_str = '', n) {
  var answer = [];
  let flag = 0;
  let char = '';

  for (x of my_str) {
    char += x;
    flag += 1;

    if (flag % n === 0) {
      answer.push(char);
      char = '';

      if (my_str.length - flag <= n) {
        answer.push(my_str.slice(flag));
        break;
      }
    }
  }

  return answer;
}

solution('abc1Addfggg4556b', 6);

// other solution
function solution(my_str = '', n) {
  const answer = [];
  let char = '';

  for (const x of my_str) {
    char += x;

    if (char.length === n) {
      answer.push(char);
      char = '';
    }
  }

  if (char.length > 0) {
    answer.push(char);
  }

  return answer;
}
