function forLoop(array){
  for (var i = 0; i<25; i++){
    if (i === 1){
      array.push("I am 1 strange loop.")
    }
    else {
    array.push("I am " + i + " strange loops.")
    }
  }
  
  return array
}

function whileLoop(num){
  while(num>0){
    console.log(num)
    num -= 1
  }  
    return "done"
}



function doWhileLoop(num){
  var i = 0
  function incrementVariable() {
    i = i + 1;
    return i;
    }

  do {
    console.log("I run once regardless")
  }
  while(incrementVariable() < num)
}

console.log(doWhileLoop(3))

/*

  describe('doWhileLoop(num)', () => {
    it ('console logs "I run once regardless." 1 time when passed an integer of 0 as a parameter.', () => {
        const spy = chai.spy.on(console, 'log');
        doWhileLoop(0);
        expect(spy).to.have.been.called.exactly(1);
    })

    it ('console logs "I run once regardless." 10 times when passed an integer of 10 as a parameter.', () => {
      const spy = chai.spy.on(console, 'log');
      doWhileLoop(10);
      expect(spy).to.have.been.called.exactly(10);
    })
  })
})

*/