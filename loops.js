/*
for ([initialization]; [condition]; [iteration]) {
  [loopBody]
  
  - separated out by semi colons
  - triple === for an equality check
  
  - array.push is used here to add / lilnk to the array
}                      */ 

function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {
      array.push(`I am 1 strange loop.`);
    } 
    else {
      array.push(`I am ${i} strange loops.`);
    } 
  }
  return array;
}

/* while ([condition]) {
  [loopBody]
}                          */


function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done";
}

/*
do {
  [loopBody];
} while ([condition]);

do-while loop is almost exactly the same as the while loop, except for the fact that the loop's body is executed at least once before the condition is tested

EXAMPLE:
function maybeTrue() {
  return Math.random() >= 0.5
}
 
do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

*****   With do, we can be sure that the body will run!  ***

*/ 

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop();
  } while (array.length > -1 && maybeTrue());
    return array;
}





   