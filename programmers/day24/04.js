// 제한시간내에 풀이 [v]
// 문제유형: 구현
// 문제형태: 로그인 성공?

function solution(id_pw, db) {
  let answer = 'fail';
  const [id, pw] = id_pw;

  for ([dbId, dbPw] of db) {
    if (dbId === id && dbPw === pw) {
      return 'login';
    } else if (dbId === id) {
      answer = 'wrong pw';
    }
  }

  return answer;
}

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);

  return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}
