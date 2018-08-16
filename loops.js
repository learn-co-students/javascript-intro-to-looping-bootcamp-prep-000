function forLoop(array) {
  for ( var i = 0; i < 25; i++) {
    if (i == 1) {
      array.push(["I am 1 strange loop."])
    } else {
      array.push(["I am ${i} strange loops."]);
      i++
    }
 }
}

function elementpush(array) {
 array.push(["I am string"])
 console.log(array)
}