function forLoop(array){
  for(var i=0; i<25; i++){
    i === 1 ? array.push(`I am ${i} strange loop.`) : array.push(`I am ${i} strange loops.`);
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


function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  
  do{
    array = array.slice(1)
  } while(array.length > 0 && maybeTrue())
  return array;
}