function forLoop(arr){

    for (let i = 0; i <25; i++){
      if (i === 1) {
          arr.push(`I am ${i} strange loop.`);
      }
      else {
        arr.push(`I am ${i} strange loops.`);
      }
    }
    return arr
}

function whileLoop(num){
  while(num > 0){
    console.log(num--)
  }
  return "done"
}

var i = 0;

function incrementVariable(){
  i += 1
  return i
}

function doWhileLoop(num){
  do{
    if (num === 0){
      console.log('I recieved a 0.')
    }
    else {
    console.log('I run once regardless.')
  }
  }
  while (incrementVariable() <= num)
  console.log(i)
}
doWhileLoop(5)
