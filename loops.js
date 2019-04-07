function forLoop(array) {
  
  for (let i = 0; i < 25; i++) 
  {if (i===1) 
  
  {
    array.push("I am 1 strange loop.");
  }
  
  else 
  
  array.push("I am "+ i +" strange loops.")
}
  return  array
}

var number = 10
function whileLoop(number) {
  while (number>=0) {
    console.log(--number)
    if (number===0) {
      return "done"
    }
  }
}

var counter = 0

function doWhileLoop(num) {
  
function incrementVariable() {
  
  counter = counter + 1;
  return counter;
 }
  do {
  console.log("I run once regardless");
} while (incrementVariable() < num + 1);
}


