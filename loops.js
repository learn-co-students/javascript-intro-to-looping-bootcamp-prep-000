function forLoop(array) {
  var i;
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loops.");
    } else {
      array.push("I am ${i} strange loops.")
    }
  }
  return array;
}
