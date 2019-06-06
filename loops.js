function forLoop(array){
  for (let i =0; i <25; i++){
    if(i === 1){
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop (n) {
  let countdown=50;
  while(countdown>0){
    console.log(--countdown)
    if(n===0){ 
      n.push('done')}
  }
  return n
  }
function doWhileLoop(num) {
  
  
}