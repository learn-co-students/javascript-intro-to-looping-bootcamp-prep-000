
// #########################
// pre-defined snippet
// #########################
var i = 0;

function incrementVariable() {
  i = i + 1;
}
// ############################

function forLoop(array) {
  //add a string to the Array 'array' 25 times
  for (var i = 0; i < 25; i++) {
/*
    array = array.concat(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
    // More readable version below
*/
    var str = `I am ${i} strange loop`;
    if (1 == i) // use singular
      str = str + ".";
    else // use plural
      str = str + "s.";

    array = array.concat(str);
  }

  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }

  return 'done';
}

function doWhileLoop(array) {
  // assume valid argument
  do {
    // not specified where to remove from
    //    array.pop();
    array.shift();
  } while (array.length > 0 && incrementVariable())

  return array;
}
