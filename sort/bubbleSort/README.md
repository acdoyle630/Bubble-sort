# Bubble Sort

BubbleSort is a sorting algorithm comparing adjacent indexes while traversing a list.  This version starts at index zero, and sorts low to high.  If the lower index value is higher than the next value a swap is made.  This method usually requires multiple passes through a list to complete. Once it has made an pass through the list without making a swap, it returns the new array.

## Psuedo Code

```sh
function bubbleSort ( array of sortable items )
  if type of list is not array
    return false
    var next
    var prev
    var clean = 0
  while clean is less than list length
    loop from 0 ... array length
      if any index is not a number
        return false
      if index i greater than next index
        swap i with next index
        set clean to zero
      if index i is not greater than next index
        increment clean
return array

```

## Performance

Bubblesort has a best performance of O(n).  This can be accomplished if this list is already sorted, and only requires one pass.

The average and worst case are both O(n^2), with the worst preformance coming from a reversed list.