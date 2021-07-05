

function forLoop(arr){
for (let i=1; i<26;i++){
arr.push(i);

}
return arr;
}
forLoop();

function whileLoop(n){
  while (n>0){
    console.log(--n)
  }
  return ('done')
}

whileLoop()

function doWhileLoop(array){
  return 'false'
do{
    array.pop()
  } while (array.length > 0 && maybeTrue())
}
doWhileLoop()
