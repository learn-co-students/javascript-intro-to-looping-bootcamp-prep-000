function forLoop(inArray) {
  let array = [...inArray];
    for (let i = 0; i < 25; i++) {
        if(i === 1) {
            array = [...array, "I am 1 strange loop."];
        } else {
            array = [...array, `I am ${i} strange loops.`];
        }
    }
  return array;
}


function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

function doWhileLoop(array) {
  var i = 0;
  
  function incrementVariable() {
    i = i + 1;
  }
  
  do {
    array.pop();
    incrementVariable();
  } while (array.length > 0 && incrementVariable());
  return array;
}