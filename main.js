
// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.

const math = (num1, num2) => console.log(num1+num2)

math(1,4)

const subtract = (num1, num2) => console.log(num1 - num2)

subtract(5,2)

// Create another function called `calculate` that takes three arguments: two numbers and a function

const calculate = (num1, num2, operation) => {
    operation(num1, num2);
}

calculate(100,99, subtract);
