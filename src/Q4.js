function isEvenOdd(num) {
  if (num % 2 === 0) {
    return `Even`;
  } else {
    return `Odd`;
  }
}

console.log(isEvenOdd(5));
console.log(isEvenOdd(8));
console.log(isEvenOdd(10));
