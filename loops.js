

function makeArray() {
  const array = []
  const t = 10

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}

const [array, t] = makeArray()
console.log(array)

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i == 1) {
      array[i + 10] = "I am 1 strange loop."
    } else {
      array[i + 10] = `I am ${i} strange loops.`
    }
  }

  return array

}

forLoop(array)



var n = Math.floor(Math.random() * 100)
function whileLoop(n){
  while(n > 0){
    console.log(--n)
  }
  return "done"
}

//whileLoop(n)


var i = 1
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array){
  do {
   array.pop()
  } while (array.length > 0 && incrementVariable())

  return array
}

