const person = {
  name: "Amit",
  age: 25,
  occupation: "Software Engineer",
};

console.log(person);

const changeOccupation = (person, newOccupation) => {
  return { ...person, occupation: newOccupation };
};

console.log(changeOccupation(person, "Product Manager"));
