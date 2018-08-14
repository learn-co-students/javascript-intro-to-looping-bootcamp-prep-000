function forLoop(array) {
  for(i=0; i< 25; i++) {
    if (i ==1) {
    array.push("I am "+ i + " strange loop.")
    }
    else {
    array.push("I am "+ i + " strange loops.")
  }
  }
      return array;
}

arr = new Array();
arr2 = forLoop(arr);
console.log(arr2);