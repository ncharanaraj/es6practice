const defaultParamsFunc = (a, b, c = 4) => {
  return a * b * c;
};
console.log(defaultParamsFunc(3, 1));
console.log(defaultParamsFunc(3, 10));
