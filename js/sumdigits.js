/**
 * Write a function called sumDigits that returns the sum of all the digits in a given number.
 * For example:
 * 5646 => 5+6+4+6 => 21
 */
let sumDigits = num => {
  let sum = (num + '').split('').reduce((acc, n) => acc + parseInt(n), 0);
  console.log(sum);
}
sumDigits(5646);
