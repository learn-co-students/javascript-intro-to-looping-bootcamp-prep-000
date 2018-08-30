//for ([initialization]; [condition]; [iteration]) {
//  [loopBody];
//}

//initialization: An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword
//condition: An expression evaluated before each loop iteration. If this expression evaluates to true, statement is executed
//iteration: A statement executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter, bringing the loop ever closer to its end
//loopBody: Code which runs on every iteration as long as the condition evaluates to true
//Use a for loop when you know how many times you want the loop to run (for example, when you have an array of known size).

function forLoop(array){
  for (var i=0; i<25; i++){
    if (i==1) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push("I am "+i+" strange loops.")
    }
  }
  return array;
}

function whileLoop(number){
  let countdown = number;
  while (number>0) {
    console.log(--number);
  }
  return "done";
}

var i=0
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  do {
    array.pop()
  }
  while (array.length > 0 && incrementVariable());
  return array
}
