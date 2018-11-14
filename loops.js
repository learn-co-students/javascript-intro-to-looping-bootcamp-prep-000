function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am 24 strange loops.`);
    }
  }
    return array;
}

function whileLoop(number) {
  while(number > 0){
    console.log(number--);
  }
  return "done";
}

function incrementVariable() {
  var i = 0;
  i = i + 1;
}

function doWhileLoop(array){
  do{
    array = array.slice(1)
  } while(array.length > 0 && incrementVariable())
  return array;
}