//"I am ___ strange loop"
function forLoop (array){
  for(let i=0;i<25;i++){
    if (i===1) {
      array.push("I am "+i+" strange loop.");
    }
    else {
      array.push("I am "+i+" strange loops.");
    }
  }
  return array;
}

//while loop countdown
function whileLoop(n){
  while (n > 0) {
    console.log(n--);
  }
  return "done";
}

//do while loop
function doWhileLoop(num){
      var i = 0;
      function incrementVariable(){
        i++;
        return i;
      }
  do {
      console.log("I run once regadless.");
  } while (incrementVariable()<num);
}