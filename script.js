function findMax(numbers) {
  if (numbers.length === 0) {
    return 0; // Return 0 if no arguments are provided
  }
  let max = numbers[0]; // Assume the first element is the maximum
  for (const number of numbers) {
    if (number > max) {
      max = number; // Update max if a larger number is found
    }
  }
  return max; // Return the maximum number found
}

// Example usage:
console.log(findMax([10, 20, 5, 8])); // Expected output: 20
