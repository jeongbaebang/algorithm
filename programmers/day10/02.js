// 제한시간내에 풀이 [v]
// 문제유형: 해쉬
// 문제형태: 모스부호

const morse = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
};

function solution(letter) {
  const arr = letter.split(' ');

  return arr
    .map((str) => {
      return morse[str];
    })
    .join('');
}

// other solution
function solution(letter) {
  return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '');
}
