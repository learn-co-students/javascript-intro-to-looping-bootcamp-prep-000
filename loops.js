function forLoop(array) {
  for(var i = 0; i <25; i++) {
array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(i) {
  while (i > 0) {
  console.log(--i)
  if (i === 0) {
    return "done"
  }
}
}

function doWhileLoop (array) {
  var i = 0;
  function incrementVariable()
  { i = i + 1;
}
do {array.length = array.length - 1;
  } while (array.length > 0 && incrementVariable());
  return array;
}