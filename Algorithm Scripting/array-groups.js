function arrayGroups(arr, size) {
  let groupedArray = [];
  while (arr.length > 0) {
    groupedArray.push(arr.splice(0, size));
  }
  return groupedArray;
}

arrayGroups([1, 2, 3, 4], 2);
