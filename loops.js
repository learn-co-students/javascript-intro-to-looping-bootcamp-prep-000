function forLoop(array){
  for(var i=0; i<25; i++){
    array.push(`I am ${i} strange loop.`)
  }
  return array;
}

console.log(forLoop([]));

function whileLoop(n){
  while(n>0){
    console.log(--n);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop();
    return array;
  } while(array.length > 0 && maybeTrue())
}