function isEligibleToVote(age) {
  if (age >= 18) {
    return `Eligible to vote`;
  } else {
    return `Not eligible to vote`;
  }
}

console.log(isEligibleToVote(20));
console.log(isEligibleToVote(18));
console.log(isEligibleToVote(17));
