A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

Write a function

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

```
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const input =  (N >>> 0).toString(2).split('');

    let max = 0
    let count = 0;
    for(let i=0;  i < input.length; i++){
        if( input[i] === '1' ){
            max = Math.max(count, max)
            count = 0;
        } else {
            count++;
        }
    }

    return max;
}
```
