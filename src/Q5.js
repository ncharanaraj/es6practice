const checkForAlphabetA = (word) => {
  const covertWordToLower = word.toLowerCase();
  for (let i = 0; i < covertWordToLower.length; i++) {
    if (covertWordToLower[i] === "a") {
      return `Includes a`;
    }
  }
  return `Does not include a`;
};

console.log(checkForAlphabetA("Tanay"));
console.log(checkForAlphabetA("Jeep"));
console.log(checkForAlphabetA("Jane"));
