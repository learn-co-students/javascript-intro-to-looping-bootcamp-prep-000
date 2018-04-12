function forLoop(array){
  var arrayName = array;
  for(var i = 0; i < 25; i++){
    if(i === 1){
      arrayName.push(`"I am 1 strange loop."`);
    }
    else{
      arrayName.push(`"I am ${i} strange loops."`);
    }
  }
  return arrayName;
}


function whileLoop(n){
  countdown = n;
  while(countdown > 0){
    console.log(countdown--);
  }
  return 'done'
}

function doWhileLoop(array){
  var doWhileArray = array;
  function maybeTrue(){
    return Math.random() >= 0.5;
  }
  
  do{
    doWhileArray.pop();
  } while(maybeTrue() && doWhileArray.length > 0);
  
  return doWhileArray;
  
}