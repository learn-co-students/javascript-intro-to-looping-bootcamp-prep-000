function forLoop(array){
  for(var i = 0; i < 25; i++){
    var str = ""
  if(i === 1){
    str += "I am 1 strange loop."
  } else {
    str += `I am ${i} strange loops.`
    }
    array.push(str)
  }
  return array
}

function whileLoop(num){
  while(num>0){
    console.log(num--)
  }
  return "done"
}

var i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num){
  do {
    console.log("I run once regardless")
  } while (incrementVariable() <= num)
}



