function forLoop(array){
  for (var x = 0; x < 25; x++){
    x === 1 ? array.push('I am 1 strage loop.'):
    array.push('I am ${x} strange loops.');
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array){
  do{
    array.pop();
  }while(array.length > 0 && maybeTrue())
  
  return array;
}