function forLoop(arrayArgument){
  for(let i=0;i<25;i++){
    if (i===1){
      arrayArgument.push("I am 1 strange loop.");
    }else{
      arrayArgument.push(`I am ${i} strange loops.`);
    
    }
  }
   return arrayArgument;
}
function whileLoop(numberArgument){
  while(numberArgument>0){
    console.log(numberArgument--)
  }
  return("done");
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arrayArgument2){
  // remove elements from array arg until array is empty
  // arryArgument2.shift()
  do{
    arrayArgument2.shift();
  
    
  }while(arrayArgument2.length>0 && maybeTrue());
  return arrayArgument2;
}