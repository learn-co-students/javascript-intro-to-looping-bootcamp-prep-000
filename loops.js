function forLoop(array){
  for(i=0;i<25;i++){
    if(i===1){
      array.push("I am "+i+" strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(x){
  while(x>0){
    console.log(--x)
  }
  return 'done';
}

function doWhileLoop(x){
  var y=0
  function poop(){
    y=y+1;
    return y;
  }
  do{
    console.log("I run once regardless.");
  } while (poop()<x);
}