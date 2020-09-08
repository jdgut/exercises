/**
 * Write a program that prints the numbers from 1 to 100 and for multiples of '3'
 * print "Tic" instead of the number and for the multiples of '5' print "Toc",
 * if the number is multiple of 3 and 5 then print “TicToc”.
 */

const max = 100;
for (let i = 1; i <= max; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('TicToc');
  } else if (i % 3 === 0) {
    console.log('Tic');
  } else if (i % 5 === 0) {
    console.log('Toc');
  } else {
    console.log(i);
  }
}
