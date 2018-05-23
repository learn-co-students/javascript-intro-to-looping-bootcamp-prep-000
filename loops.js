function doWhileLoop(arr){
  function maybeTrue() {
  return Math.random() >= 0.5;
}
while (maybeTrue() && arr.length>0){
  arr.pop();
}
return arr;
}

function forLoop(array){
  for (var i=0; i<25; i++){
    array.push(`I am ${i} strange loop.`);
  }
  return array;
}

function whileLoop(n){
  while (n>0){
    console.log (n);
    n--;
  }
  return 'done';
}