
function forLoop(array){

  for (let i = 0;i<25;i++){

    if (i==1){array.push("I am 1 strange loop")}
    else {array.push("I am ${i} strange loop")}

  }
  return array
}

function whileLoop(num){

  while(num>0){
    console.log(num);
    num--;
  }

  return 'done'

}

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

function doWhileLoop(array){
  do{array.pop()}
  while(array.length > 0 && maybeTrue());
  return array
}
