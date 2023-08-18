function whatIsInAName(collection, source) {
  const sourceArray = Object.keys(source);

  return collection.filter((obj) =>
    sourceArray.every((key) => obj[key] === source[key])
  );
}

whatIsInAName(
  [
    { first: "John", last: "Adams" },
    { first: "George", last: "Washington" },
    { first: "Thomas", last: "Jefferson" },
  ],
  { last: "Jefferson" }
);
