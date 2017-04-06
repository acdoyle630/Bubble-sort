/*jshint esversion: 6*/

/*const wrapper = ( array ) =>{
  function seperate( arr ){
  debugger;
    var left = [];

    var right = [];

    var pivot = arr[0];

    for( var i=1; i<arr.length; i++ ) {

      if( arr[i] < arr[0] ){

        left.push(arr[i]);

      } else {

        right.push(arr[i]);
       }
    }
    if(left.length > 1){
      seperate(left);
    }
    if(left.length <= 1){
      return {
      valLeft: left,
      valRight: right
     };
   }
  }*/

  /*var partition = seperate(array);

  console.log(partition.valLeft);
  console.log(partition.valRight);*/
//};





var sortedObj ={};
var piv = [2];
const sort = ( arr, piv) => {
  //debugger;
  var left = [];
  var right = [];
  for( i= 1; i<arr.length; i++){
    if(arr[i] < arr[0]){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  if( left.length <= 1 ){
    sortedObj.leftSide = left;
    return  left.concat(2).concat(right);
  } else {
    sortedObj.rightSide = right;
    sort(left);
  }


};


console.log(sort([2,9,8,1,0]));









