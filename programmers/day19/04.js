// 제한시간내에 풀이 [v]
// 문제유형: 구현

function solution(my_string) {
  return 'Bcad'.toLowerCase().split('').sort().join('');

  function toLowerCase(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      var charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        char = String.fromCharCode(charCode + 32);
      }
      result += char;
    }
    return result;
  }

  function split(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      result.push(str.charAt(i));
    }
    return result;
  }

  function sort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  function join(arr, separator) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
      if (i !== 0) {
        result += separator;
      }
      result += arr[i];
    }
    return result;
  }
}
