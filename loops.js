function forLoop(array){
  //const myArray = [];
    for(var i =0; i <25; i++){
    if (i=== 1){
    array.push(`I am ${1} strange loops`);
    }
    else{
      array.push(`I am ${i} strange loops`);
    }
  }
  return array;
}
function whileLoop(number){
  while(number>0){
    console.log(number)
    number--
  }
  return "done"
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  do{array.pop()}
   while(array.length = 0 && maybeTrue()=== false);
  return array
}
