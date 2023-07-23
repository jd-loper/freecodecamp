function findLongestWord(str) {
  let words = str.split(" ");
  let currentWord = "";
  for (let word of words) {
    if (word.length > currentWord.length) {
      currentWord = word;
    }
  }
  return currentWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
