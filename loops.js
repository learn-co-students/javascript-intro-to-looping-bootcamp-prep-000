function forLoop(arr){
  for(let i = 10; i < 35 ; i++){
    if(i === 10){
      arr[11] = "I am 1 strange loop.";
    }
    if(i!== 11){
      arr[i] = "I am " + (i - 10) + " strange loops.";
    }
  }
  return arr;
}
function whileLoop(num){
  while(num > 0){
     console.log(--num);
  }
  return "done";
}
function doWhileLoop(num){
 do{
    console.log("I run once regardless.");
    --num;
 }while(num>0);
}