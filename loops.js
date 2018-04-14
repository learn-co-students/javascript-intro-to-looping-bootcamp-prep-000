function forLoop(array) {

for (i=0;i<25;i++){
  array.push("I am ${i} strange loop");
  }
  return array
}
function whileLoop(n) {
<<<<<<< HEAD
  while(n>0) {
    console.log(--n)};
  return "done"
}
function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
  do {array.shift()}
while(array.length > 0 && maybeTrue()> 0);
return array
=======
  while(n>0)
  {console.log(--n)};
  console.log('done')
>>>>>>> cbf0c3d8ce9323363c4d4a0763719c950e7e522d
}
