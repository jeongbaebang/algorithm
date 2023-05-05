// 제한시간내에 풀이 [x]
// 문제유형: 순회
// 문제형태: 캐릭터의 좌표
// 소감: 경계선 로직을 시간내에 구현하지 못했다

// [x, y]
// [0,0]에서
// up을 누른다면 캐릭터의 좌표는 [0, 1] -> [x, y + 1]
// down을 누른다면 [0, -1] -> [x, y - 1]
// left를 누른다면 [-1, 0] -> [x - 1, y]
// right를 누른다면 [1, 0] -> [x + 1, y]

// 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return
// [0, 0]은 board의 정 중앙에 위치 -> 경계선 구하기 -> Math.floor(board / 2)
// board의 크기를 벗어난 방향키 입력은 무시
function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const outlineX = Math.floor(board[0] / 2);
  const outlineY = Math.floor(board[1] / 2);

  for (const input of keyinput) {
    if (input === 'up' && y < outlineY) {
      y += 1;
    }

    if (input === 'down' && y > -outlineY) {
      y -= 1;
    }

    if (input === 'left' && x > -outlineX) {
      x -= 1;
    }

    if (input === 'right' && x < outlineX) {
      x += 1;
    }
  }

  return [x, y];
}
solution(['left', 'right', 'up', 'right', 'right'], [11, 11]);
solution(['down', 'down', 'down', 'down', 'down'], [7, 9]);

// 다른 풀이
function solution(keyinput, board) {
  const directions = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  const mapWidth = Math.floor(board[0] / 2);
  const mapHeight = Math.floor(board[1] / 2);

  let position = [0, 0];

  for (let i = 0; i < keyinput.length; i++) {
    const direction = keyinput[i];
    const [dx, dy] = directions[direction];
    const newPosition = [position[0] + dx, position[1] + dy];

    if (
      Math.abs(newPosition[0]) <= mapWidth &&
      Math.abs(newPosition[1]) <= mapHeight
    ) {
      position = newPosition;
    }
  }

  return position;
}
