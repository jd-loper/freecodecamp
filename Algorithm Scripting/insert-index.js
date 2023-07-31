function insertIndex(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}
insertIndex([1, 2, 3, 5], 4);
