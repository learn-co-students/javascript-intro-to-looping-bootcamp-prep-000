function forLoop(arr){
  for(let i=0; i<25;i++){
    if (i===1){
      var firstString = "I am 1 strange loop."
      arr.push(firstString)
    }else{
      var newString ="I am " +i+ " strange loops."
      arr.push(newString)
    }
  }
  return arr
}

function whileLoop(n){
  while(n>0){
    console.log(n)
    n-=1
  }
  return "done"
}

let i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}


function doWhileLoop(num){
  do{
    console.log("I run once regardless")
  }while(incrementVariable() < num+1);
}








