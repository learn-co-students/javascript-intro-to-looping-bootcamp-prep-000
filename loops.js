const myArray = []

function forLoop(myArray){
  for (let i = 0; i < 25; i++){
    //myArray.push('I am ${i} strange loops.')
  if(i == 1){
    myArray.push('I am 1 strange loop.')}
  else
    myArray.push('I am ' +i+ ' strange loops.')
  }
  return myArray
}

function whileLoop(int){
  while(int > 0){
    console.log(int)
    int--
  }
  return 'done'
}
var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}
function doWhileLoop(int){
  do{
  console.log("I run once regardless. ")}
  while(incrementVariable() <= int)
}
