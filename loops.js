
function forLoop(array){
  for(var i=0; i<25; i++){
    array.push(`I am ${i} strange loop${1 === 0 ? '':'s'}`)
  }
  return array;
}

function whileLoop(n){
while (n-- > 0) {
  console.log(n);
}
return 'done';
}

function doWhileLoop(array){
  do{
    array.pop();
  }
  while(array.length > 1);

  return array;
}
function maybeTrue(){
  return Math.random() >= 0.5?`false`:`true`;
}
var array = [];
/*forLoop(array);
while(array.length > 0){
  console.log(array.pop());
}*/
//doWhileLoop(25);
