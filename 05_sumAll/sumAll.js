const sumAll = (num1, num2) => {
    // Check if both arguments are positive integers
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      num1 < 0 ||
      num2 < 0 ||
      !Number.isInteger(num1) ||
      !Number.isInteger(num2)
    ) {
      return 'ERROR';
    }
  
    // Ensure num1 is smaller than or equal to num2
    if (num1 > num2) {
      [num1, num2] = [num2, num1]; // Swap values if necessary
    }
  
    // Calculate the sum of numbers in the range
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  
    return sum;
  };

// Do not edit below this line
module.exports = sumAll;
 