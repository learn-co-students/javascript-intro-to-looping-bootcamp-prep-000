function forLoop(array){
 for (let i = 0; i < 25; i++){
  if (i === 0) {
   array.push("I am 1 strange loop.")
  } else {
   array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
 }
 return array
}

var timer = 60;
function whileLoop(timer){
  while (timer > 0) {
    console.log(timer);
    timer--;
  }
  return('done');
}

function doWhileLoop() {
    function maybeTrue() {
      return Math.random() >= 0.5
    }
    do {
      console.log('doo-bee')
    } while (maybeTrue());
    return doWhileLoop
}