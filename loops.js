function forLoop(Array) {
  for(i=0;i<25;i++) {
    Array.push(`I am ${i} strange loops.`);
  }
  return Array;
}

function whileLoop(n){
  while(n>0){
  console.log(--n);
}
return 'done';
}

function maybeTrue(){
  return Math.random() >= 0.5;
}

function doWhileLoop(array){
  do{
    array.pop();
  }while(array.length > 0 && maybeTrue());
  return array;
}