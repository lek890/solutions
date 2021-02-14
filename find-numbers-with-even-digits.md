Given an array nums of integers, return how many of them contain an even number of digits.

```
var findNumbers = function(nums) {
    let itemCount = 0;
    for (let i of nums) {
        if(i.toString().length % 2 == 0){
            itemCount++;
        }
    }
    return itemCount;
};
```
