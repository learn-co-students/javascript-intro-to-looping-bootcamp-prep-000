function forLoop(array) {
 
for (let i = 0; i < 25; ++i) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
   
   return array
}


function whileLoop(n) {
  let countdown = n;

while (countdown > 0) {
  console.log(--countdown)  
}
  return 'done'
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
  console.log('doo-bee-doo-bee-doo')
} while (array.length > 0 && maybeTrue());
  array.pop()
  return array
}

