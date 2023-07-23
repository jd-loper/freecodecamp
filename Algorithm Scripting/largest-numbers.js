function largestOfFour(arr) {
  let largestNumbers = [];
  for (let subArr of arr) {
    largestNumbers.push(Math.max(...subArr));
  }
  return largestNumbers;
}
largestOfFour([
  [13, 27, 18],
  [4, 5, 3],
  [32, 35, 39],
  [1001, 857, 1],
]);
