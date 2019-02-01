
var forLoop = function(array) {
  for (let i = 0; i < 25; i++) {
   if (i === 1) {
    array.push("I am 1 strange loop.")
   } else {
     array.push(`I am ${i} strange loops.`)
   }
  }
  return array
}

var whileLoop = function(number) {
  while(number > 0) {
    console.log(number)
    --number
  }
  return 'done'
}

var doWhileLoop = function(array) {
  var i = 0;
  
  function incrementVariable() {
  i = i + 1;
}
  do {
    array.shift();
    } while (array.length > 0 && incrementVariable())
    return array
}

