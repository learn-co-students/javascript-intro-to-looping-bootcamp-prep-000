var i = 0;

function forLoop(stuff){
  for (var i = 0; i < 25; i++){
    if (i ===1){
    stuff.push('I am 1 strange loop.')
    }
    else{
    stuff.push(`I am ${i} strange loops.`)
    }
  }
  return stuff;
}

function whileLoop(number){
  while (number > 0){
    console.log(--number)
  }
  return "done";
}

function doWhileLoop(array){
  do{
    array.pop();
  }
  while(array.length > 0 && incrementVariable());
  return array;
}

function incrementVariable() {
  i = i + 1;
}