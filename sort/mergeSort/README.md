# Merge Sort

Merge sort is a sorting algorithm that works by recursivly splitting an array in half until it reaches a single index. It will then reconstruct the array, and sort as it goes.  As it works its way back through the call stack, it combines the array back together and returns a sorted array.

```sh
function mergesort( sortable array )
  if array length is less than or equal to 1
    return array
  var left = empty array
  var right = empty array
  loop from 0...array length
    if i is less than array lenght / 2
    push to left
    else
    push to right
  function merge (mergesort( left ), mergesort ( right ))

function merge( left, right )
  var result = empty arry
  while left and right both have length
    if first index left <= first index right
    result push left
    remove first index left
    else
    result push right
    remove first index right
  while left has length
    result push left first index
    remove left first index
  while right has length
    result push right first index
    remove first right index
  return result
```

## Performance

Merge sort has a best, worst, and average case performance of O(n log n).  By halving the array everytime it divides the work.  As the length of the data increases the impact becomes less and less significant.

