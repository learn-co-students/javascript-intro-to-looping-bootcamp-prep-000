function forLoop(array) {
  for(i = 0; i < 25; i++) {
    if (i === 0) {
      array.push("I am 1 strange loop.");
    }
    else{
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return "done";
}

function doWhileLoop(array) {
  var i = 0;
 
function incrementVariable() {
  i = i + 1;
}
  do {
    array.pop();
  } 
  while(array.length > 0 && incrementVariable());
  return array;
}



/*
  describe('doWhileLoop(array)', () => {
    it('removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`', () => {
      const [array, t] = makeArray()
      const l = array.length

      const newArray = doWhileLoop(array)

      expect(newArray).to.have.length.of.at.most(l - 1)
    })
  })
})
*/