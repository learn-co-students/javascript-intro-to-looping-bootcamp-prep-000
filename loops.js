function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}
function whileLoop(n){
  while(n>0)
  {console.log(n--)}
  return "done"
}
function doWhileLoop(array){
do {
  array.pop()
} while (array.length>0 && maybeTrue())
return array
}

do_while_arr = ['a','b','c'];
console.log(doWhileLoop(do_while_arr))