function forLoop(arr){
  for(let i = 0; i < 25; i++){
    arr.push(`I am ${i + 1} strange loop${i === 0 ? "" : "s"}.`);
  }
  return arr;
}

function whileLoop(num){
  while(num > 0){
    console.log(num);
    num--;
  }
  return "done";
}

function doWhileLoop(arr){
  do{
    arr.pop();
  } while(arr.length > 0 && maybeTrue())
  
  return arr;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}