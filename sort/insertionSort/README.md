# Insertion Sort

Insertion sort is a sorting algorithm that works by comparing an index with all previous indexes to determine where it fits.  This example starts from the index zero and moves up.  As it moves down the list it isolates an index and compares to all previous indexes.  When it determines where it fits, it inserts the isolated index and moves all other indexes over.  If an index value is less than all others in the list, it replaces the first index.  Once is has perfomed this for every index the new array is returned.

## Psudocode

```sh
current = 1
function insert ( sortable array )
  if data is not an array
  return false
  if current = array length
  return array
  loop from 0...array length
    if current index is less than index 0
      insert current at index 0
    if current index is less than previous index and greater than current index minus 2
      insert current index between current -1 and current -2
    increment current
    function insert ( new array )
    return array
```
## Performance

Insertion sort has a best case performance of O(n), this is accomplised if the array is already sorted and it only needs run the function once.

The average and worst case performance are both O(n^2), with the worst case being an array with none of the indexs ordered.