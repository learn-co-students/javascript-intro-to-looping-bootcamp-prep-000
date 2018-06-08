function forLoop(array) {
  for(let i=0; i<25; i++){
    if(i === 1){
      array.push("I am 1 strange loop");
    } else {
        array.push("I am ${i} strange loops");
    }
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    console.log("number is equal to :" + n);
    n--;
  }
  return 'done';
}

whileLoop(5);

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.length = array.length - 1;
    console.log("array length is: " + array.length);
  } while (array.length > 0 && maybeTrue());
return array; 
}

var b = ["one", "two", "three", "four", "five", "six", "seven"];

doWhileLoop(b);