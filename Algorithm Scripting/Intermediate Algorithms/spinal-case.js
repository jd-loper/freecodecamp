function spinalCase(str) {
  const newStr = str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();

  return newStr;
}

spinalCase("AllThe Small_Things");
