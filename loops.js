function forLoop(arr){
  for(var i = 0; i<25;i++){
    arr.push(`I am ${i} strange loop`);
  }
  return arr;
}

function whileLoop(num){
  var countdown = num;

  while(countdown > 0){
  countdown--;
  console.log(countdown);
}
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(arr){
  do{
    maybeTrue();
    arr.pop();
  }
  while(arr.length > 0 && maybeTrue()){
  arr.pop();
}
return arr;
}