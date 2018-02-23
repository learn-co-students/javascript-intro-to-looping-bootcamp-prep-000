function forLoop(arr){
  for (let i = 1; i <= 25; i++){
    if (i == 1){
      arr.push("I am 1 strange loop.");
    } else {
      arr.push(`I am ${i} strange loops`);
    }
  }
  return arr;
}

function maybeTrue(){
  return Math.random() >= 0.5;
}

while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}

function whileLoop(number){
  while (number > 0){
    console.log(--number);
  }
  return "done";
}

function doWhileLoop(arr){
  do {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
  return arr;
}