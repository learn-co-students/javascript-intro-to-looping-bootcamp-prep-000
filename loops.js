function forLoop(array){
  for(var i=0 ; i<25 ; i++){

    array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`

  }
  return array;
}

function whileLoop(num){
  while(num>0){
    console.log(num);
    num--;
  }
  return "done";
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    array.pop();
  }while(maybeTrue() && array.length >= 0);
  return array;
}