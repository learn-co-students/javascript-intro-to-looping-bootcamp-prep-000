function forLoop(array){
  for (var i=0; i<25; i++){
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}
function whileLoop(n){
  while (0 < n) {
    console.log(n);
    n--;
  }
  return 'done';
}
function doWhileLoop(array){
  do {
    array.pop();
  } while (array === undefined || array.length == 0);
  return array;
}
