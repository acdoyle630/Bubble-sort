/*jshint esversion: 6 */
module.exports = () => {
  function bubbleSort( arr ) {
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
  return {
    bubbleSort,
  };
};
