

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  
  if (i===1){
    array.push("I am a strange loop.")}
    else { (i > 1)
    array.push('I am ${i} strange loops.')
}
}
return array
}

function whileLoop(n) {
while (n>0){
  console.log(--n)
}
  return 'done' 
}

