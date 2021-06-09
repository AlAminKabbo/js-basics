let highIncome= true;
let goofCreditScore = false;
let eligibleForLoan = highIncome && goofCreditScore; //Logical AND
console.log(eligibleForLoan);

let EligibleForLoan = highIncome || goofCreditScore; //Logical OR
console.log(EligibleForLoan);

let a=true;
let b=false;
console.log(!a);
console.log(a!=b); // not equal