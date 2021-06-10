function forLoop (array) {
  for ( var i = 0; i < 25; i++) {
    array.push(console.log('I am ${i} strange loops.'));
  }
  return array;
}

function whileLoop(n){

  while (n > 0){
  
  console.log(--n);
  if (n === 0){
  
  return 'done';
  }
  }
}

function doWhileLoop(array){
  
  function maybeTrue() {
  return Math.random() >= 0.5
}
 do {
   array.slice(1);
   return array.slice(1);
 } while (array.length > 0 && maybeTrue())
}