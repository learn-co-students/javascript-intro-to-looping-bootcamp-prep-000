function forLoop(array){
 for (var i = 0; i < 25; i++){
  if (i === 1) {
   array.push("I am 1 strange loop.")
  } else {
   array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
 }
 return array;
}

function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }
  
  function doWhileLoop(num){
    var i = 0;
    do{
      console.log("I run once regardless.");
      i++;
    } while (i < 0);
    
  }
  

/*/* describe('doWhileLoop(num)', () => {
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