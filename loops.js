for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time");
}

var arr1 = []

function forLoop(arr1){
  for(let i = 0; i < 25; i++){
    if (i === 1){ arr1.push("I am 1 strange loop");
  } else {arr1.push("I am ${i} strange loops")}
 }
 return arr1
}

function whileLoop(num){
  while(num > 0){
    console.log(--num)
  }
  return "done"
}

function doWhileLoop(arr){
  function maybeTrue() {
  return Math.random() >= 0.5
 }
  do {
    arr.pop() 
  } while(arr.length > 0 && maybeTrue());
  return arr
}