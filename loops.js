
//push is going to add element to end of array
//define array


function forLoop(array) {
  for (let i = 0; i < 25; i++) {

    if (i==1) {


      array.push( `"I am the 1 strange loop."`)

    } else {

      array.push(`"I am the ${i} strange loops."`)

    }

  }

  return array

}



function whileLoop(x) {
  let countdown = x;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}



function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    console.log('doo-bee-doo-bee-doo')
  } while (array.length > 0 && maybeTrue())

  array.shift(array)

return array
  }
