
//   FUNCTIONS

function forLoop(anArray){
  for(var i=0; i=>25; i++){
    if (i == 0){
      anArray.push("I am 1 strange loop.");
    } else {
      anArray.push(`I am ${anArray[i]} strange loop.`);
    }
  }
  return;
}

function whileLoop (n){
  while (n > 0){
    console.log(n);
    n--;
  }
  console.log(`Done`)
}

function doWhileLoop(anArray) {

  do {
    console.log(`remove loop before pop: ${JSON.stringify(anArray)}`);
    anArray.pop();
    console.log(`remove loop after pop: ${JSON.stringify(anArray)}`);
  } while (anArray.length > 0 && !maybeTrue())
  return;
}

function maybeTrue() {
  return Math.random() >= 0.5
}


// PROCESS



//forloop([]);
whileLoop(6);

var numberArray = [];
for (var n=0; n<100; n++){
  numberArray.push(n+1);
  console.log(`Add loop: ${JSON.stringify(numberArray)}`);
}
doWhileLoop(numberArray);
