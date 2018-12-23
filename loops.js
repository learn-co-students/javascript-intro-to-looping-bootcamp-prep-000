var j = 0;

function forLoop(my_array) {
  for (var i = 0; i < 25; i++) {
    if (i > 1) {
      my_array.push(`I am ${i} strange loops.`);
    } else {
      my_array.push(`I am ${i} strange loop.`);
    }
  }
  return my_array;
}

function whileLoop(countdown) {
  while(countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}

function incrementVariable() {
  j = j + 1;
}

function doWhileLoop(my_array) {
  do {
    my_array.pop();
  } while (my_array.length > 0 && incrementVariable() )
  return my_array;
}