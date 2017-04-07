# quickSort

Quick sort is the most efficient sorting algorithm.  It is accomplished by halving the data by by value around a determined pivot point.  All values lower than pivot point to the left and higher to the right.  It will then divide the left and right the same way, untill it is broken down to individual element.  It is so effective because it concatinates as it deconstructs the data. In this example we always assign the first index as the pivot point.

## Psudocode

```sh
function quicksort( sortable array )
  if array length <= 1
    return array
  pivot = array first index
  partition (array, pivot)
  return quicksort(left) + pivot + quicksort(right)

function partition ( arr, pivot )
  left = empty array
  right = empty array

 loop from 1...array length
  if array index i < pivot
  push into left
  else
  push into right

  return object
    left
    right
```

## Performance

Quick sorts average and best performace is O(n log n).  By splitting the data in half recursivly, each additional piece of data is much less significant.
