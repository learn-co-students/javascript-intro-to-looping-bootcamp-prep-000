//forLoop
function forLoop(array){
  for (let i=0;i<25;i++){
    if (i===1){
      array.push('I am 1 strange loop.')
    }
    else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

//whileLoop
function whileLoop(num){
  while (num > 0){
    console.log(num);
    --num;
  }
  return 'done';
}

//doWhileLoop
var i = 0;
function incrementVariable(){
  i++;
  return i;
}

function doWhileLoop(number){
  do {
    console.log('I run once regardless.')
  } while (incrementVariable() <= number);
}


