function forLoop(arr){
  for(let i=0; i<25; i++){
    if (i==1){
      arr.push("I am 1 strange loop.")
    }else{
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr
}

function whileLoop(int){
  while(int>0){
    console.log(int);
    int=int-1;
  }
  return "done";
}


function doWhileLoop(arr){
  do{
    arr.pop();
  }while (arr.length>0)
  return arr
}
