function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    if (num >= 0) {
      result *= i;
    } else {
      return 1;
    }
  }
  return result;
}
factorial(5);
