function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am 1 strange loop.`)
    }else{
   array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}
forLoop([])

 function whileLoop(number){
  while(number > 0){
    console.log(--number);
  }
  return "done";
}
whileLoop(2)

function doWhileLoop(num){
  function maybeTrue() {
    num--
    return num
}
do{
  console.log('I run once regardless.')
}
while (num > 0 && maybeTrue()){
  return num
  }
}
 doWhileLoop(10)
