function forLoop(foo){
    for(var i = 0; i < 25; i++){
      if(i === 1){
        foo.push("I am 1 strange loop.")
      }
      else{
        foo.push(`I am ${i} strange loops.`)
      }
    }
    return foo
}

function whileLoop(num){
  while(num > 0){
    num--;
    console.log(num)
  }
  return "done"
}

var x = 0;
function incrementVariable() {
  x = x + 1;
  return x;
}

function doWhileLoop(n){
  do{
    console.log('I run once regardless')
  } while(incrementVariable() <= n);
}
