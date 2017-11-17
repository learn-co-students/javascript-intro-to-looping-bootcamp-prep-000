function forLoop(array) {
  for(i=0;i<25;i++) {
array.push('I am '+ i+ ' strange loop')
  }
  return array
}

function whileLoop(number) {
while (number > 0 ) {console.log(number); number-- }
return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
   return array.length--
  }
  do { console.log(array)}
  while(array.length > 0 && maybeTrue() )
  return array
}
