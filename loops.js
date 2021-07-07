/* for ([initialization]; [condition]; [iteration]) {
  [loopBody];
} 

i is set equal to 1 
as long as i is less than 100, execute the code in the loopBody
which is print "Hello World"; increment i each time the code in loopBody is executed

for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time" );
}*/

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      console.log(array.push("I am + i + strange loop."));
    }
    else {
      console.log(array.push("I am + i + strange loops."));
    }
  }
  return array;
}

/* 
while ([condition]) {
  [loopBody]
}
*/

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

/*
do {
  [loopBody];
} while ([condition]);
*/

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do {
    console.log(--array.length);
  } while (array.length > 0 && maybeTrue());
  return array; 
}