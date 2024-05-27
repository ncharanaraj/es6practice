const checkLength = (word) => {
  if (word.length >= 5) {
    return `More than five characters`;
  } else {
    return `Less than five characters`;
  }
};

console.log(checkLength("Programming"));
console.log(checkLength("Jeep"));
