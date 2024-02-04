"use strict";

function solveEquation(a, b, c) {
  let x;
  let y;
  let arr = [];
  let D = b ** 2 - 4 * a * c;

  if (D > 0) {
    x = (-b + Math.sqrt(D))/(2*a)
    y = (-b - Math.sqrt(D))/(2*a);
    arr=[x, y]
  } else if (D == 0) {
    x = -b/(2*a);
    arr=[x];
  } else {
    arr=[]; 
  }

  return arr;
}

//процентную ставку(percent), сумму первоначального взноса (contribution), сумму кредита (amount) и срок(countMonths)
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let P = percent / 100 / 12;
  let creditMonthly = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let credit = parseFloat((creditMonthly * countMonths).toFixed(2));

  return credit;  
}