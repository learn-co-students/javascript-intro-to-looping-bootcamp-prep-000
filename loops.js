function forLoop(array) {
  var newArray = []
  for(var i = 0; i < 25; ++i){
    newArray[i] = `I am ${i} strange loop${i == 1? "" : "s"}.`
  }
  return [...array, ...newArray]
}

function whileLoop(number) {
  while(number > 0){
    console.log(--number)
  }
  return "done"
}

var i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(number) {
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() <= number)
}