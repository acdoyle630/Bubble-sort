/*jshint esversion: 6*/

function mergeSort ( arr ) {
  if( arr.length <= 1 ){
    return arr;
  }
  var left = [];
  var right = [];
  for( var i = 0; i < arr.length; i++){
    if( i < ( arr.length ) / 2 ){
      left.push(arr[i]);
      //console.log( left);
    } else {
      right.push(arr[i]);
      //console.log(right);
    }
  }
  mergeSort(left);
  //console.log(left);
  mergeSort(right);
  return merge( left, right );
}


function merge( arr1, arr2 ){
 // debugger;
  if(arr1.length === 0 && arr2.length === 0){
    return;
  }
  var results = [];
  console.log('left ' +arr1);
  console.log('right ' +arr2);
 while (arr2.length !== 0 && arr1.length !== 0){
  // if(arr1.length > 1){
  //   arr1.shift();
  // }
  // if(arr2.length > 1){
  //   arr2.shift();
  // }
    if(arr1[0] <= arr2[0] ){
      results.push(arr1.shift());
    } else {
      results.push(arr2.shift());
    }
  }
  while( arr1.length !== 0){
    results.push(arr1.shift());
  }
   while( arr2.length !== 0){
    results.push(arr2.shift());
   }
  return results;
}

console.log(mergeSort([1,6,3,4,8,10,5,1]));
