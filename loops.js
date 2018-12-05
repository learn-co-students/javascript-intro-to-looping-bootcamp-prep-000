function forLoop(array) {
   for ( var i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}
function whileLoop(n) {
  var countdown = n;
     while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }
function incrementVariable() {
  var i = i + 1;
}
  function doWhileLoop(array) {
    do{
      array.pop()
      incrementVariable()
    }
    while(array.length - 1 > 0 && incrementVariable())
    return array
  }