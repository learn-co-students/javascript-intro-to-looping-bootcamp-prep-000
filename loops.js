function forLoop(arr){
  for(var i=0;i<25;i++){
    if(i===1){
      arr.push('I am 1 strange loop.')
    }
    else{
      arr.push(`I am ${i} strange loops.`)
    }
    }
    return arr
  }

function whileLoop(n){
  while(n>0){
    console.log(n)
    n--
  }
  return 'done'
}

function doWhileLoop(n){
  var i=0;
  do{
    console.log("I run once regardless")
    i++
  } while(i<n)
}

//   describe('whileLoop(n)', () => {
//     it('counts down from n to 0', () => {
//       const spy = chai.spy.on(console, 'log')
//       const n = Math.floor(Math.random() * 100)

//       expect(whileLoop(n)).to.equal('done')
//       expect(spy).to.have.been.called.exactly(n)

//       console.log.reset()
//     })
//   })

//   describe('doWhileLoop(num)', () => {
//     it ('console logs "I run once regardless." 1 time when passed an integer of 0 as a parameter.', () => {
//         const spy = chai.spy.on(console, 'log');
//         doWhileLoop(0);
//         expect(spy).to.have.been.called.exactly(1);
//     })

//     it ('console logs "I run once regardless." 10 times when passed an integer of 10 as a parameter.', () => {
//       const spy = chai.spy.on(console, 'log');
//       doWhileLoop(10);
//       expect(spy).to.have.been.called.exactly(10);
//     })
//   })
// })
