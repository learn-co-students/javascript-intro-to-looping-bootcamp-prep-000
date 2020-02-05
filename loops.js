function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    }
    else{
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}


function whileLoop(num){
  while (num > 0){
    console.log(num)
    num--
  }
  return "done"
}

var x = 0;
 
function incrementVariable() {
  x = x + 1;
  return x;
}

function doWhileLoop(int){
  do{
    console.log("I run once regardless.")
  } while (incrementVariable() <= int);
}