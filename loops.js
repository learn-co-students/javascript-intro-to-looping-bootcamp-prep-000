function forLoop(array){
  array = []
  for (let i = 0; i < 25; i++){ 
   i === 1 ? array.push("I am 1 strange loop.") : array.push(`I am ${i} strange loops.`)
}
 return array
}

