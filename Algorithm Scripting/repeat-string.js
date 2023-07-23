function repeatString(str, num) {
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}
repeatString("abc", 3);
