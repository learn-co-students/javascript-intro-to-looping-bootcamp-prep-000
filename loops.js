/*for (let i = 99; i > -1; i--) {
  if (i === 1) {
    console.log("1 bottle of beer on the wall, 1 bottle of beer!  Take one down, pass it around, no more bottles of beer on the wall!");
  } else if (i === 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer!  Go to the store and buy some more, 99 bottles of beer on the wall!");
  } else {
  console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down, pass it around, " + (i-1) + " bottles of beer on the wall!");
  }
}*/

var strangeLoops = [];

function forLoop(strangeLoops) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      strangeLoops.push("I am 1 strange loop.");
    } else {
      strangeLoops.push("I am " + i + " strange loops.");
    }
  }
  return(strangeLoops);
}

//forLoop(strangeLoops);
//console.log(strangeLoops);

/*function maybeTrue() {
  return Math.random() >= 0.5;
}

while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}*/

let countdown = 15;

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown);
  }
  return('done');
}

/*var i = 0;

function incrementVariable() {
  i = i + 1;
}

do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i < 5);*/

var doWhileArray = ['hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen', 'fluorine', 'neon'];

var i = 0;

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(doWhileArray) {
  do {
    console.log(doWhileArray);
    doWhileArray.pop();
  } while (doWhileArray.length);
  return doWhileArray;
}

doWhileLoop(doWhileArray);