var array=[]

function forLoop(array) {
  for (let i= 0; i < 25 ; i++ ) {
    if (i === 0) { array.push ("i am a strange loop.");}
    else array.push ("I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.")
  }
return array
}

function whileLoop(n) {
while (n > 0){
  console.log( --n)
}
return 'done'}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    console.log(array=array.slice(1))
  }
   while (array.length > 0 && maybeTrue());
  return array;
}
