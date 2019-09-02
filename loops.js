function forLoop(stringArray){
   for(var i=0; i<25; i++){
     if (i==1) {stringArray.push (`I am 1 strange loop.`)}
     else {stringArray.push (`I am ${i} strange loops.`)}
   }
   return stringArray
}
   
function whileLoop(n){
  while(n>0){
    console.log("The number is : "+ n)
    n--
  }
  if (n===0){
    flag="done";
  }
  return flag;
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(stringArray){
  var newArray = stringArray.slice()
  do {console.log(newArray.pop());
  }
  while(newArray.length > 0 && maybeTrue())
  return newArray
  }