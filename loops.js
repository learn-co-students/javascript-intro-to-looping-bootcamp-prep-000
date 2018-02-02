function forLoop(array){
  for (var i = 0; i < array.length; i++) {
    array[array.length] = `I am ${i} strange loop`;
    if(i > 1){
      array[array.length] += 's';
    }
  }
  return array;
}

// function whileLoop(n){
//  while(n >= 1){
//    console.log(n);
//    n--;
//  }
//  return 'done';
// }
//
// function doWhileLoop(array){
//   do {
//     array.pop();
//   } while (array.length > 1 || !maybeTrue());
// }
