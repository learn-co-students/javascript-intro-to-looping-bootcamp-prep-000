function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am "+ i + "strange loop");
    }

    else {
      array.push("I am"+ i + "strange loops.");
    }

  }
  return array;
}


function whileLoop(n) {
  while (n > 0) {
    n--;
    console.log(n);
  }
  return 'done';
}


var maybeTrue = function(){
  return Math.random() >= 0.5
}


function doWhileLoop(array) {
  do {
    array.pop();
    return array;
  } while (maybeTrue);
  return array;
}