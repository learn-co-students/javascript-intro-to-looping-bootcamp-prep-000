var strangeLoops = []

function forLoop(array) {

  for (let i = 0; i < 25; i++) {
    
    if (i === 1) {
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  
  return array
  
}

console.log(forLoop(strangeLoops))




function whileLoop(number) {
  
  while (number > 0) {
    
    console.log(number)
    number--
  } 
  
  return 'done'
}

console.log(whileLoop(10))


function doWhileLoop(num) {

  let i = 0;
  
  function incrementVariable() {
    i = i + 1;
    return i;
  } 
  
  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < num);
}

console.log(doWhileLoop(3))

