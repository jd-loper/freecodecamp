function bouncer(arr) {
  const truthArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === true) {
      truthArray.push(arr[i]);
    }
  }
  return truthArray;
}
bouncer([7, "ate", "", false, 9]);
