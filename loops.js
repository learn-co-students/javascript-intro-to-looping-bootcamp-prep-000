function forLoop(array){
  for(i=0;i<25;i++){
    if(i==1){
      array.push("I am 1 strange loop.");
    }else{
      array.push('I am ' + i + ' strange loops.');
    }
  }
  return array;
}

function whileLoop(n){
  let countdown = n;

  while (countdown > 0) {
    console.log(--countdown);
  }
  //console.log("done");
  return "done";
}

function doWhileLoop(num){
  var i = 0;

  do{
    console.log ("I run once regardless.");
    i = i + 1;
  }while(i < num)
}
