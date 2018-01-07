function forLoop(arr){
  for(i=0; i<25; i++){
    if(i===1){
      arr.push(`I am ${i} strange loop.`);
    } else {
      arr.push(`I am ${i} strange loops.`);
    }
  }
  return arr;
}

function whileLoop(n){
  while(n>0){
    console.log(--n);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(arr){
  do{
    arr.length--;
  } while (maybeTrue() && arr.length);
  return arr;
}