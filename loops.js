


function forLoop(arr) {
  var length = arr.length;

    for(let i = 0 ; i < 25 ; i++) {
      if (i <= 1) arr[i+length] = "I am " + i + " strange loop."
      else if (i >= 2) arr[i+length] = "I am " + i + " strange loops."
    }
    return arr
}

function whileLoop(idx) {
  while (idx) {
    console.log(idx)
    idx--;
  }
  return 'done'
}

var i = 0;
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(arr) {
  do {
    arr.splice(i,1)
  } while ( arr.length > 0 && incrementVariable())
  return arr
}
