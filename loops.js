function forloop(array){
for (var i = 0; i <= 25; i++){
 if(i === 1){
   array.push("I am ${i} strange loops.")
   } else {
     array.push("I am ${i} strange loops.")
   }
 }
}
return array
var x = 50;
function whileloop(x){
  while (x > 50){
  console.log(--x)
  }
  return "done"
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  do {
    array.pop()
  }
  while (array.length > 0 && maybeTrue())
  return array
}
