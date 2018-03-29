array = []

function forLoop(array) {
  const t = 25
  for ( let i = 0; i < t; i++) {
    array.push("I am " + i + " strange loop")
  }
  return array
}