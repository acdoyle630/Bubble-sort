/*jshint esversion: 6*/

module.exports = () => {
  function mergeSort ( arr ) {
    if( arr.length <= 1 ){
      return arr;
    }
    var left = [];
    var right = [];
    for( var i = 0; i < arr.length; i++){
      if( i < ( arr.length ) / 2 ){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return merge(mergeSort(left), mergeSort(right));
  }
  function merge( left, right ){
    var result =[];
    while (left.length !==0 && right.length !==0){
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while(right.length){
      result.push(right.shift());
    }
    return result;
  }
  return{
    mergeSort,
    merge
  };
};







