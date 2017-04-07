# selectionSort

Selection sort is an algorithm that moves through a list looking for the first of last value.  This example uses the first, or lowest value. It builds the list from low to hight by making passes through the list, and moving the smallest number to the front.  On the next pass it moves the smallest number to the position directly after the previously selected value.  This continues until it has selected every index.

## Psudocode

```sh
min = 0
function selection ( sortable arry )
if min = array length
  return array
smallest = array[min]
  loop from min... array length
    if i less than smallest
      swap indexes
    incremenet min
    return selection ( new Array )
```

## Performance

Selection sort with always have a performance of O(n^2).  Even if the array is ordered perfectly, it will still need to traverse the entire array and compare every index to all the following indexes.