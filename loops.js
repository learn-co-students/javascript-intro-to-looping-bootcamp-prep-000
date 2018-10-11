arr = []
function forLoop(arr){
  for (var i = 0; i < 25; i++) {
    if (i < 2){
      arr.push(`I am ${i} strange loop.`)
    }
    else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr
}

function whileLoop(n){
  while (n > 0) {
    console.log(n)
    n -= 1
  }
  return 'done'
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(arr){
  do {
    arr.pop()
    incrementVariable();
  } while ( (arr.length > 0) && (incrementVariable()===false) );
  return arr
}
