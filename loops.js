array = []
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
     array = array.concat(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
    }
  return (array)
  }
forLoop(array)

function whileLoop(n) {
  while (n > 0) {
    console.log(`${n}`)
    --n
  }
  return ('done')
}
whileLoop(10)

numb = ['1','2','3','4','5','6']
function doWhileLoop(array) {
  function maybeTrue() {
    return array.length > 0
   }

   do {
   array.splice(0, 1)
} while (maybeTrue());
 return array
}
doWhileLoop(numb)
