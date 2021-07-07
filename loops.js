function forLoop(array){
    for (let i = 0; i < 25; i++){
      if (i === 1){
        array.push("I am 1 strange loop.");
      }
      else{
        array.push(`I am ${i} strange loops.`);
      }
    }
    return array;
}

function whileLoop(n){
  let i = n;
  i--;
  while(i >= 0){
    console.log(i);
    i--;
  }
  return "done";
}

function incrementVariable(i) {
  i = i + 1;
}

function doWhileLoop(array){
  let i = 0;
  do{
    array.pop();
    incrementVariable(i);
  } while (i < array.length-1);
  return array;
}