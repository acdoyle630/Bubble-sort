/*jshint esversion: 6*/
const wrapper = (  ) => {
    current = 0;
    var loops = 0;
    var prev;
    var next;
  function sort ( arr, current ) {
    debugger;
    if(current === arr.length -1) {
      loops ++;
      current = 0;
      if(loops === arr.length -1){
      return arr;
    }
    return sort (arr,current);
    }
    if(arr[current] > arr [current+1]){
      next = arr[current];
      prev = arr[current + 1];
      arr[current + 1] = next;
      arr[current] = prev;
      current ++;
    }
    if(arr[current] <= arr[current+1]){
      current ++;
    }
    return sort(arr, current);
   }
    return {
    sort,
  };
};

var test = wrapper();

console.log(test.sort([3,2,4,1], current));