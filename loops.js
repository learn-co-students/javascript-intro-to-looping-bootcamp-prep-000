function forLoop(array){
  for (var i = 0; i < 25; i++){
    array.push(`I am ${i} strange loops.`);
  }
  return (array); //this makes sure that it doesn't repeate it 25 times
}

function whileLoop(timer){
    while (timer > 0 ){
  console.log (--timer); //decrement timer by 1; evaluates timer and then decrements it
  }
  return("done");
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop (array){
  do {
    array.pop() // remove elemnts from the array
  }
  while (array.length>0); //while the array is more than 0, it will stop at 0
  return array;
}
