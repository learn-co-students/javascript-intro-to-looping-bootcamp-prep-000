function forLoop(arr){
  for(var i=0; i<25; i++){
    if(i==1) arr.push(`I am ${i} strange loop.`)
    else arr.push(`I am ${i} strange loops.`)
  }
  return arr
}

function whileLoop(num){
  while(num>0) console.log(num--)
  return 'done'
}

var i = 0

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(arr){
  do{
    arr.pop()
  } while(arr.length > 0 && incrementVariable());
  return arr
}