/**
 * Write a program that sums all the numbers divisible by 3 or 5 below 1000.
 * For example: All the numbers divisible by 3 or 5 below 10 are: 3,5,6,9 and their sum is 23.
 */

const max = 1000;
let i = 1;
let total = 0;
while (i <= max) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
  }
  i++;
}

console.log(total);
