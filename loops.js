var strangeLoops = [];

function forLoop(strangeLoops) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      strangeLoops.push('I am 1 strange loop.');
    } else {
      strangeLoops.push(`I am ${i} strange loops.`);
    }
  }
  return strangeLoops;
}

forLoop(strangeLoops);

var countdown = 100;

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done';
}


function doWhileLoop(num) {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }

  do {
    console.log('I run once regardless');
  } while (incrementVariable() < num);
}

doWhileLoop(10);
