/**
 * File Name: ComplexCalculator.js
 * Description: A sophisticated and complex calculator with various mathematical operations.
 * Author: John Doe
 */

// Calculator class
class Calculator {
  constructor() {
    this.result = 0;
  }

  // Addition method
  add(...values) {
    return values.reduce((sum, value) => sum + value, 0);
  }

  // Subtraction method
  subtract(...values) {
    return values.reduce((difference, value) => difference - value);
  }

  // Multiplication method
  multiply(...values) {
    return values.reduce((product, value) => product * value, 1);
  }

  // Division method
  divide(...values) {
    if (values.includes(0)) {
      throw new Error("Cannot divide by zero.");
    }
    return values.reduce((quotient, value) => quotient / value);
  }

  // Exponentiation method
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  // Square root method
  squareRoot(value) {
    if (value < 0) {
      throw new Error("Cannot calculate square root of a negative number.");
    }
    return Math.sqrt(value);
  }

  // Factorial method
  factorial(n) {
    if (n < 0) {
      throw new Error("Cannot calculate factorial of a negative number.");
    }
    if (n === 0) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }

  // Logarithm method
  logarithm(value, base) {
    return Math.log(value) / Math.log(base);
  }
}

// Create a new calculator instance
const calculator = new Calculator();

// Example usage:
console.log(calculator.add(2, 4, 6)); // Output: 12
console.log(calculator.subtract(10, 5)); // Output: 5
console.log(calculator.multiply(3, 5, 2)); // Output: 30
console.log(calculator.divide(100, 4)); // Output: 25
console.log(calculator.power(2, 3)); // Output: 8
console.log(calculator.squareRoot(9)); // Output: 3
console.log(calculator.factorial(5)); // Output: 120
console.log(calculator.logarithm(100, 10)); // Output: 2

// Additional operations and advanced functionality can be implemented in this calculator class.