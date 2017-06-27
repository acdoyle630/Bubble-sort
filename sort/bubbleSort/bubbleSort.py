def bubbleSort (arr):
  clean = 0
  while clean < len(arr):
    for x in range (len(arr)):
      if x < len(arr) - 1:
        if arr[x] > arr[x + 1]:
          prev = arr[x + 1]
          nextNum = arr[x]
          arr[x] = prev
          arr[x + 1] = nextNum
          clean = 0
        else:
          clean += 1
  print arr



bubbleSort([1,2,1000, 25,7])