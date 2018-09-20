function forLoop(array) {
  var myString = "";
  for (i = 0; i < 25; i++) {
    if (i == 1){
      myString = `I am ${i} strange loop.`;
    } else {
    myString = `I am ${i} strange loops.`;
    }
    array.push(myString);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return "done";
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (pointLessFunc() && array.length > 0);
  return array;
}

function pointLessFunc() {
  //why was this function even part of the assignment????
}