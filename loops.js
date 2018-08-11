function forLoop(array){
  //array = []
  for(let i = 0; i < 25; i++){
    if(i == 1){
      array.push("I am 1 strange loop.");
    }else{
      array.push(`I am ${i} strange loops.`);
    }
  }
  return(array);
}

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
  return 'done';
}

function doWhileLoop(array){

  function incrementVariable() {
    i = i + 1;
    var i = 0;
  }
 
  do {
    console.log(1)
    array.pop()
    incrementVariable();
  } while (array.length > 0 && incrementVariable() !== true);
  return array;
  }