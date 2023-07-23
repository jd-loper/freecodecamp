function confirmEnding(str, target) {
  let substrLength = str.length - target.length;
  if (str.slice(substrLength) === target) {
    return true;
  }
  return false;
}

confirmEnding("Life finds a way", "way");
