Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)

    return Math.ceil((Y - X )/D)
}
