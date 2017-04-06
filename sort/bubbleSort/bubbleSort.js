/*jshint esversion: 6*/
/*const wrapper = (  ) => {
    current = 0;
    var loops = 0;
    var prev;
    var next;
  function sort ( arr ) {
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
      clean ++;
    }
    return sort(arr, current);
   }
    return {
    sort,
  };
};*/

/*
var test = wrapper();
console.log(test.sort([5,1,4,2,8]));*/

//Imperative solved
module.exports = () => {
  function sort( arr ) {
  if( Array.isArray(arr) !== true ){
    return false;
  }
    var next;
    var prev;
    var clean = 0;
    while(clean < arr.length){
      for(var i=0; i<arr.length; i++){
        if (typeof arr[i] !== 'number'){
          return false;
        }
        if(arr[i] > arr[i+1]){
          prev = arr[i+1];
          next = arr[i];
          arr[i] = prev;
          arr[i+1] = next;
          clean =0;
        } else {
          clean ++;
        }
      }
    }
      return arr;
    }
    return{
      sort,
    };
  };

