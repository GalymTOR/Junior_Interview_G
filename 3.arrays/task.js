function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length!=arr2.length){
    result=false;
    
  }
  else{
    for (var i = 0; i < arr1.length; i++) {
      if (((arr1[i]===arr2[i])==false) || (arr1[i]!=arr2[i])){
        result=false;
        break;
      }
      else{
        result=true;
      }


 }
 }

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr=arr.filter(item => (item > 0)&&(item%3==0)).map((x) => x * 10);

  return resultArr; // array
}