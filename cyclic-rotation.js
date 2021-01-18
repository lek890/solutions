The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given

    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

```
function solution(A,K) {
    // write your code in JavaScript (Node.js 8.9.4)

    if( A.length > K){
       A.unshift(...A.splice(-K)); //continous block, remember?
    } else {
        for(let i =1 ; i<=  K;i++){
            A.unshift(...A.splice(-1));
        }
    }
    return A;
}

```
