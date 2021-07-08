function forLoop(array){
  for(let i=0; i<25; i++){
    if(i===1){
      array.push("I am 1 strange loop.");
    }
    else {
      array.push("I am ${i} strange loops");
    }
  }
  return array;
}

function whileLoop(number){
  while(number > 0){
    console.log(number);
    number --;
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.splice(array.length-1, 1);
  }  
  while(array.length > 0 && maybeTrue()){
    array.splice(array.length-1, 1);
  }
  return array;
}

// Test-functions to see if the output of the functions match what's expected //
function printArray(array){
  for(let i = 0; i<array.length; i++){
    console.log(array[i]);
  }
}

var a = [];
printArray(forLoop(a));