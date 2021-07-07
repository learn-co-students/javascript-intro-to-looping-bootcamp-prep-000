
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
  array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.")
  }
return array
}


function whileLoop (n) {
  let countdown = n
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {

  do {
    // In here we have to remove one item from the array
    array.splice(0, 1)
  } while (maybeTrue() || array.length !== 0);
  return array;
}
