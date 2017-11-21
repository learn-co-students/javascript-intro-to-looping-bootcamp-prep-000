function forLoop(array){
  for (var i = 0; i < 25; i++){
    array.push(`I am ${i} strange loops.`);
  }
  return (array); //this makes sure that it doesn't repeate it 25 times
}

function whileLoop(){
  var timer = 50
    while (timer > 0 ){
  console.log (timer);
  }
  return (timer);
}
