An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const actualLength = A.length +1;
    const actualSum = actualLength * (actualLength +1)/2;
    let sumAvailable = 0;

    for(let i=0; i < A.length; i++){
        sumAvailable += A[i];
    }
    return actualSum - sumAvailable;

}
