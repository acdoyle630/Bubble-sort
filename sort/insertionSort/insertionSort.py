def insertionSort(arr):
  current = 1
  if current == len(arr):
    return
  for x in reversed(arr):
    if arr[current] > arr[current - 1]:
      larger = arr[current - 1]
      smaller = arr[current]
      arr[current] = larger
      arr[current - 1] = smaller
      current += 1
  print arr
insertionSort([1,9,8,7,11,2])