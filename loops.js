// function makeArray() {
//   const array = []
//   const t = 10

//   for (let i = 0; i < t; i++) {
//     array.push("I am a strange loop.")
//   }

//   return [array, t]
// }
var forLoop = (array) => {
  const newArray = [...array]
  for(let i = 0; i< 25; i++) {
    newArray.push(`I am ${i} strange loop${i < 2 ? '' : 's'}.`)
  }
  return newArray
}

var whileLoop = (n) => {
  while(n > 0) {
    console.log(n)
    n--
  }
  
  return 'done'
    
}

var doWhileLoop = n => {
  do {
    console.log(n)
    n--
  } while (n > 0)
}

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
*/