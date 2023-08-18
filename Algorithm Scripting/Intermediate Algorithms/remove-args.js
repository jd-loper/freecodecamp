function destroyer(arr, ...args) {
  return arr.filter((elem) => !args.includes(elem));
}

destroyer(["tree", "hamburger", 53], "tree", 53);
