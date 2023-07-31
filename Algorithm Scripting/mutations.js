function mutations(arr) {
  let string1 = arr[0].toLowerCase().split("");
  let string2 = arr[1].toLowerCase().split("");
  for (let i = 0; i < string2.length; i++) {
    if (string1.includes(string2[i]) === false) {
      return false;
    }
  }
  return true;
}
mutations(["Alien", "line"]);
