function forLoop(array){
  for(let i = 0; i < 25; i++){
    var outputString;
    if (i === 1){
      outputString = "I am 1 strange loop.";
    }
    else{
      outputString = "I am " + i + " strange loops.";
    }
    array[array.length] = outputString;
  }
  return array;
}
function whileLoop(n){
  var done = 'done'
  while(n>0){
    console.log(n);
    n--;
  }
  return done;
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  do{
    array.pop()
  }while( maybeTrue() && array.length > 0);
  return array;
}