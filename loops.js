function forLoop(array) {
  for(let x = 0; x < 25; x++){
    if(x > 1){
      array.push(`I am ${x} strange loops.`);
    }else{
      array.push(`I am ${x} strange loop.`);
    }
  }
  
  return array;
}

const myArray = [];
// console.log(forLoop(myArray));

function whileLoop(number) {
  counter = number;
  while(counter > 0) {
    counter -= 1;
    console.log(counter);
  }
  return "done";
}

// console.log(whileLoop(5));

var i = 0;
 
function incrementVariable() {
  i += 1;
  return i;
}

function doWhileLoop(num) {
  // var counter = 1;
  do {
    // console.log(counter);
    console.log("I run once regardless.");
    // console.log(`I run once regardless. ${i}`);
    // counter += 1;
  } while (incrementVariable() <= num);
}

// doWhileLoop(10);
