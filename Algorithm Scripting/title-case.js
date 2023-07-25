function titleCase(str) {
  let lowercaseStr = str.toLowerCase().split(" ");

  for (let i = 0; i < lowercaseStr.length; i++) {
    lowercaseStr[i] =
      lowercaseStr[i].at(0).toUpperCase() + lowercaseStr[i].slice(1);
  }

  let capitalizedString = lowercaseStr.join(" ");
  return capitalizedString;
}
titleCase("I'm a little tea pot");
