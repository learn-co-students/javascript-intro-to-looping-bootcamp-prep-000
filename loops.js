function forLoop(a){
  for (var i = 0;i<25;i++){
    if (i===1) {
      a.push("I am 1 strange loop.")
    }
    else {
      a.push('I am ${i} strange loops.')
    }
  }
  return a
}
function whileLoop(n){
  let temp = n 
  while (temp>0) {
    console.log (temp)
    temp--
  }
  return "done"
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(a){
 do {
   a.pop()
 }
 while(a.length>0 && maybeTrue())
 return a
}