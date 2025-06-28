// Evaluate Reverse Polish Notation
// You are given an array of strings tokens that represents a valid arithmetic expression
//  in Reverse Polish Notation.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.
// Example 1:

// Input: tokens = ["1","2","+","3","*","4","-"]

// Output: 5

// Explanation: ((1 + 2) * 3) - 4 = 5
// Constraints:

// 1 <= tokens.length <= 1000.
// tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100]

let tokens = ["1", "2", "+", "3", "*", "4", "-"];
console.log("Tokens", tokens);
function evalRPN(tokens) {
  let stack = [];
 

  for (let token of tokens) {

    let result;
    if (["+", "-", "/", "*"].includes(token)) {
        const num2 = stack.pop();
        const num1 = stack.pop();
      if (token === "+") {
        result = num1 + num2;
      }
      if (token === "-") {
        result = num1 - num2;
      }
      if (token === "/") {
        result = Math.trunc(num1 / num2);
      }
      if (token === "*") {
        result = num1 * num2;
      }
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }
  console.log("Result",stack[0]);
}
evalRPN(tokens);
