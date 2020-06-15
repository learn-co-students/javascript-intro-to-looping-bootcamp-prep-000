function forLoop(array){
  for (let i = 0; i<25; i++){
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
function whileLoop(number){
  let i = number
  while(i>0){
    console.log(--i)
  }
  return "done";
}

function doWhileLoop(integer) {
  var i = 1;
  do{
    console.log("I run once regardless.");
  }while(i++ < integer);
}