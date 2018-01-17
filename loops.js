function forLoop(array){
  var forLoopArray = array
  for(var i=0; i<25; i++){
  forLoopArray.push("I am ${i} strange loop${i === 0 ? '' : 's'}.")
  }
  return forLoopArray
}

function whileLoop(n){
  while(n > 0){
    n = n-1
    console.log(n)

    
  }
  if(n === 0){
    return 'done'
  }
}
function doWhileLoop(array){

  function maybeTrue(){
    return Math.random()>=0.5
  }
do {  
  array.length = array.length - 1;
  maybeTrue();
  return array
 } while (array.length > 0 && maybeTrue());
}
