function forLoop(array){
  for (i = 0; i < 25 ; i ++ ){
    if (i === 1){
      array.push('I am 1 strange loop.')    
    }else{
      array.push(`I am ${i.toString()} strange loops.`)
    }
  }
  return array
}

function whileLoop(num){
  while (num > 0) {
    console.log(num--)
  }
  return 'done'
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  do{
    array.pop();
    incrementVariable();
  } while (array.length>0 && incrementVariable());
  return array
}