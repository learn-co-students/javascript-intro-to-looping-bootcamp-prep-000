function forLoop(arg){
  for (var i = 0; i < 25; i++){
    arg.push(`I am ${i} strange loop ${i === 0 ?'':'s'}.`);
  }return arg
}
function whileLoop(num){
  while(num > 0){
    console.log(num)
    num--
  } return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5 
}

function doWhileLoop(array){
 do {console.log("idk wtf should go here");}
  while(maybeTrue() && array.length > 0);{
     array.length = array.length - 1
  }return array
}

