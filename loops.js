function forLoop(array){
  let newarr=array;
  for(let i=0; i<'25'; i++){
    
    if(i===0|| i===1){
    newarr.push(`"I am ${i} strange loop."`)
    }
    else { newarr.push(`"I am ${i} strange loops."`)}
  }
  return newarr
}
function whileLoop(n){
  while(n>0){
    console.log(n);
    --n;
  }
  return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  do{
    
    array.pop()
  }while(array.length > 0 && maybeTrue() );
  return array;
}