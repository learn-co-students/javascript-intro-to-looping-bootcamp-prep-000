
function forLoop(array){
  for (var i = 0; i < 25; i++){
    if (i === 1) {
      array.push(`I am 1 strange loop.`) ;
    } else {
      array.push(`I am ${i} strange loops.`);
    }
    
  }
  return array ;
}
var number = Math.random();
function whileLoop(number){
    while (number > 0){
    console.log(--number);
    }
  return "done";
}

var i = 0;

  function doWhileLoop(number){
    function incrementVariable() {
  i = i + 1;
  return i;
}
do {
  console.log("I run once regardless.");
  incrementVariable();
} while (i <= number);
return i;
}
