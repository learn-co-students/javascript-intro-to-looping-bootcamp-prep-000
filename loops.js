function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push( "I am ${i} strange loops" + array[i])
  }
  return array
}
function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}
function doWhileLoop(array) {
  function maybeTrue() {
  return array.pop()
}
do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue() || array.length > 0)
return array
}
