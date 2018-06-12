var strangeLoop = [];

function forLoop(strangeLoop) {
  for(var i = 0; i < 25; i++) {
    if(i == 1) {
      strangeLoop.push(`I am 1 strange loop.`);
    } else {
      strangeLoop.push(`I am ${i} strange loops.`);
    }
  }
  
  return strangeLoop;
  
}

var countdown;

function whileLoop(countdown) {
  
  while(countdown > 0) {
    console.log(--countdown);
  }
  
  return `done`;
  
}

function doWhileLoop(strangeLoop) {
  
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  
  do {
    
    strangeLoop.shift();
    
    return strangeLoop;
    
  } while (maybeTrue());
  
}