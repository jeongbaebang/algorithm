// 제한시간내에 풀이 [x]
// 문제유형: 구현
// 문제형태: 다항식 구하기
// 소감: 다시 자세히 분석해봐야겠다 (어렵다)

function solution(polynomial) {
  const terms = polynomial.split(' + ');

  const count = terms.reduce(
    (acc, term) => {
      console.log(acc, term);
      if (term.includes('x')) {
        const coefficient = term.replace('x', '') || '1';

        acc.x += Number(coefficient);
      } else {
        acc.num += Number(term);
      }

      return acc;
    },
    { x: 0, num: 0 }
  );

  const x = count.x > 0 ? `${count.x > 1 ? count.x : ''}x` : '';
  const num = count.num > 0 ? String(count.num) : '';
  const plus = x !== '' && num !== '' ? ' + ' : '';

  return x + plus + num;
}

solution('10x + 7 + x'); // "4x + 7"
solution('x + x + x'); // "3x"
