function forLoop (array) {
  for(i=1; i<26; i++) {
    var helloRay = []
    if (i === 1) {
      helloRay.unshift('I am 1 strange loop')
    }
    else {
      helloRay.push(`I am ${i} strange loops`)
    }
  }
}
function whileLoop(num) {
  while (num > 0) {
    console.log(num)
    num--;
  }
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array) {
  do {
    array.pop()
  }
  while (maybeTrue());
}
