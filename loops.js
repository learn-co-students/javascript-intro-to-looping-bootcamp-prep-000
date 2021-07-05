
var makeArray = [];

function forLoop(makeArray) { // passed
  var i;
    for (i = 0; i < 25; i++) {
      if (i === 1) {
        makeArray.push(`I am 1 strange loop.`);
      }
      else 
        makeArray.push(`I am ${i} strange loops.`);
    }
  return makeArray;
}

/*
function whileLoop(countdown) { // 
  
  while (countdown = 100, countdown >= 0, --countdown){
    if (countdown === 0){
      // console.log('done');
    }
  }
  return 'done';
}*/

function doWhileLoop(makeArray) { // 
  function maybeTrue() {
  return Math.random() * 100;
  }
    do {
      makeArray.pop();
    } while (maybeTrue(makeArray)) {
      return false;
    }
  return doWhileLoop();
}
  
  
