var array = []
function maybeTrue(){
  return Math.random() >= 0.5
}

function forLoop(array){
  for(var i=0;i<25;i++){
    if(i==1){
      array.push("I am 1 strange loop")
    }else{
      array.push("I am ${i} strange loops")
    }
  }
  return array
}

function whileLoop(x){
  while(x>0){
    console.log("x")
    x--
  }
  return "done"
}

function doWhileLoop(array){
  do{
    array.splice(0,array.length-1)
  }while(array.length > 0 && maybeTrue())
  return array
}
