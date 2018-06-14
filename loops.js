function forLoop(array){
  for (var i=1; i<26; i++){
    if (i===1){
      array.push('I am 1 strange loop.')
    }
    else {
      array.push('I am ${i} strange loops.')
    }
  }
  return array
}

function whileLoop(count){
  while (count>0) {
    console.log(count)
    count--
  }
  return 'done'
}

function doWhileLoop(array) {
  if (array.length > 0 && maybeTrue()) {
    array.pop()
  }
  return array
}

function maybeTrue() {
  return Math.random() >= 0.5
}