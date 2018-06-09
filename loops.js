var arr = ["Hello", "Hi"]

function forLoop(a){
  for(var i = 0; i < 25; i++){
    a.push(`I am ${i} strange loops.`)
  }
  return a
}

var num = 5

function whileLoop(a){
  while(a > 0){
    console.log(a--)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(a){
  do {
    a.pop()
  } while (maybeTrue() && a.length > 0)
  return a
}