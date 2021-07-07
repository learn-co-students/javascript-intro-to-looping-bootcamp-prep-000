
function forLoop (array) {

  for(i=0; i < 25; i++){
    if (i===1){
      message = `I am ${i} strange loop.`
      array.push(message)
    } else {
      message = `I am ${i} strange loops.`
      array.push(message)
    }
  }

  return array
}


function whileLoop (number){
  while (number >0){
    console.log(--number);
  }
  return `done`
}

function doWhileLoop (int) {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log ("I run once regardless.")
  } while (incrementVariable() < int)

}
