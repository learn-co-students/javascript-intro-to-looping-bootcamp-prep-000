function forLoop (array){
for (let i = 1; i <= 25; i++){
  if (i === 1){
       array.push( "I am 1 strange loop.")
  }
  else{
      array.push('I am ' +i+ ' strange loops.')
  }
}
console.log(array)
return array

}

function whileLoop(num){
  while(num > 0){
    console.log(num)
    num--
  }
  return "done"
}

function doWhileLoop(array){
 do{
   
  function maybeTrue() {
  return Math.random() >= 0.5
  }
  array.pop()
 }
while(array.length > 0 && maybeTrue())

return array;
}