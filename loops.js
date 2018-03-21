function forLoop(array) {
  for (var i = 0; i < 25; i = i + 1) {
    if(i === 1){
      array.push('I am 1 strange loop.');
    } else{
      array.push(`I am ${i} strange loops.`);
    }
    console.log('arr', array)
  }
  return array
}

function whileLoop(count) {
  while (count > 0) {
    console.log(count)
    count = count - 1
  }
  return 'done'
}

function maybeTrue () {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array = array.slice(0,-1)
  } while (array.length > 0 && maybeTrue())
  return array
}
