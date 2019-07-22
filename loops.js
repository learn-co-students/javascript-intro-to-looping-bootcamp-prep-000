function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return(array);
}

function whileLoop(number){
  var n = number;
  while (n > 0)
  {
    console.log(n-=1);
  }
  return("done");
}

function doWhileLoop(num) {

  var something = 0; // to avoid infinite loop

    do {
      console.log("I run once regardless.");
      something++;
    }
    while(
      something<num
      );

}