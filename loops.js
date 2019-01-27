function forLoop(alpha) {
  for( let i = 0; i < 25; i++ ) {
    if( i === 1) {
      alpha.push("I am " + i + " strange loop.")
    }
    else {
      alpha.push("I am " + i + " strange loops.")
    }
  }
  return alpha
}

function whileLoop(num) {
  while( num-- > 0 ) {
    console.log(num)
  }
  return "done"
}

var incVar = 0;

function incrementVariable() {
  incVar = incVar + 1;
}
function doWhileLoop(myArr) {
  do {
  myArr.pop()
  } while (myArr.length > 0 && incrementVariable)
  
  return myArr
}

