function pigLatin(str) {
  const vowels = str.match(/[aeiou]/);
  for (let i = 0; i < str.length; i++) {
    if (!vowels) {
      return str + "ay";
    }

    if (str.at(0).includes(vowels)) {
      return str + "way";
    } else if (vowels.includes(str[i])) {
      const vowelIndex = i;
      const consonants = str.slice(0, vowelIndex);
      const newStr = str.slice(vowelIndex);
      return newStr + consonants + "ay";
    }
  }
}

pigLatin("california");
