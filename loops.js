
var forLoop = function (arr) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push(`I am 1 strange loop.`)
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
  }

  return arr;
}

var whileLoop = function(num) {
  while (num > 0) {
      console.log(num);
      num--;
  }
  return "done"
}

var doWhileLoop = function (arr) {
  var i = 0;

  function incrementVariable() {
    i = i + 1;
  }

  do {
    arr.pop();
    incrementVariable();
  } while (i < arr.length);

  return arr;


}
