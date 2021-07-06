function forLoop(array){
  var array = [...array, "I am 0 strange loops."]
  array.push("I am 1 strange loop.")
  for (let i = 2; i < 25; i++){
    array.push("I am "+i+" strange loops.")
  }
  return array
}//non-destructive!
function whileLoop(countdown){
  while (countdown > 0) {
    console.log(--countdown);
  }
  return 'done'
}
function doWhileLoop(array){
  var i = 0

  function incrementVariable() {
    i = i + 1
    if (i<=4){
      return true
    }
    else{
      return false
    }
  }

  do {
    array.shift()
  } while (array.length > 0 && incrementVariable())
  return array
}
