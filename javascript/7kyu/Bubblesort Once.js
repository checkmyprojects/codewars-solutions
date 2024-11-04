// https://www.codewars.com/kata/56b97b776ffcea598a0006f2

function bubblesortOnce(arr) {
    let newArr = arr.slice();
    for (let i = 0; i < newArr.length - 1; i++) {
      if (newArr[i] > newArr[i + 1]) {
        [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
      }
    }
    return newArr;
  }