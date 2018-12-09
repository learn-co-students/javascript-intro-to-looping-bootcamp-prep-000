
//Going to get loopy

function forLoop(array){
  for(var i = 0; i < 25; i++){
    if (i===1) { //Decide if loop is plurarl, grammar is important.
      var newString = `I am ${i} strange loop.`;
    } else {
      var newString = `I am ${i} strange loops.`;
    }
    array.push(newString);
  }
  return array;
}

function whileLoop(n){ //Do some things untill n-othing left
  while(n>0){
    console.log(n);
    n--
  }
  return 'done';
}

function doWhileLoop(array){
  do {
    array.pop();
  } while (array.length > 0)
  return array
}