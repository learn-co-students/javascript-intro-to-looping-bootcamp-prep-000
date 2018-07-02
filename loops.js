function forLoop(array){
  for(var i=0; i<25;i++){
    if(i===1){
    array= [...array, `I am 1 strange loop.`];
    }else{
    array= [...array, `I am ${i} strange loops.`];
    }
  }
  return array;
}

function whileLoop(num){
  while(num >0){
    console.log(num);
    num--;
  }
  return "done";
}

function doWhileLoop(array){
  do{
     array.pop();
  }while(maybeTrue()&&array.length>0)
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}