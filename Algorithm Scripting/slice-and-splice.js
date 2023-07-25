function frankenSplice(arr1, arr2, n) {
  const arrSlice = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    arrSlice.splice(n, 0, arr1[i]);
    n++;
  }
  return arrSlice;
}

frankenSplice([1, 2, 3], ["a", "b"], 1);
