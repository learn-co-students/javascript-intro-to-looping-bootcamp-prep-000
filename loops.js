var stringArray=[];
var n=10;
function forLoop(stringArray){
   for(var i=0; i<25; i++){
       let s = i === (0 || 1) ? `I am ${i} strange loop.` : `I am ${i} strange loops.`
       stringArray.push(s);
   }
   return stringArray;
  
}
function whileLoop(n){
  var flag="notdone";
  while(n>0){
    console.log("The number is : "+ n)
    n--
  }
  if (n===0){
    flag="done";
  }
  return flag;
}

function doWhileLoop(stringArray){
  console.log(stringArray);
  do{
    console.log(stringArray.pop());
  }while(stringArray.length > 0 && maybeTrue())
  return stringArray;
}

function maybeTrue() {
  return Math.random() >= 0.5
}