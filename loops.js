function forLoop(array) {
  var newArray = array.slice();
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      newArray.push('I am 1 strange loop.')
    } 
    else {
      newArray.push(`I am ${i} strange loops.`)
    }
  }
  return newArray;
}

function whileLoop(n) {
 var countdown = n
 while (countdown > 0) {
   console.log(--countdown);
 }
 return 'done'
}

function doWhileLoop(array) {
  var i = 0;
  function incrementVariable() {
  i = i + 1;
}
do {
  array.pop()
} while (array.length > 0 && incrementVariable());
return array;
}