var array = []

function forLoop(array) {
  for (var i = 1; i < 26; i++) {
    if (i == 1) {
      var newArray = [...array, 'I am 1 strange loop']//array.push(console.log('I am '+i+' strange loop'))
    }
    else {
      var newArray = [...array, 'I am '+i+' strange loops']//array.push(console.log('I am '+i+' strange loops'))
    }

    return newArray

  }
}
