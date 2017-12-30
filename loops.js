function forLoop (array) {
  array.push("I am 1 strange loop.");
  for (var i = 1; i < 25; i++){
    array.push(`I am ${i} strange loops.`);
  }
  return array;
}

function whileLoop (n) {
  while(n > 0){
    console.log(n);
    --n;
  }
  return ('done');
}

function doWhileLoop (array) {
  do {
    array.pop();
  } while (array.length > 0);
  
  return array;
}
