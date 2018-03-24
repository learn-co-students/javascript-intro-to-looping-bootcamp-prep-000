array = [];

//number = 25

function forLoop(array) {
	for (let i = 1; i <= 25; i++) {
		if (i == 1) {
			array.push(`I am ${i} strange loop.`);
		} else {
			array.push(`I am ${i} strange loops.`);
		}
	}	
	return array
}

function whileLoop(number) {
	while (number > 0) {
		number--;
		console.log(number);
	}
	return `done`
}

function maybeTrue() {
  return Math.random() >= 0.5
}
 
function doWhileLoop(array) {
	do {
		array.pop();
	}
	while (array.length > 0 && maybeTrue())
	return array
}

//console.log(whileLoop(number))
//console.log(doWhileLoop(array))
//console.log(forLoop(array))
//forLoop(array)
//console.log(array)
//console.log(array.length)

/*
describe('loops', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'loops.js'), 'utf-8')
  })

  describe('forLoop(array)', () => {
    it('adds `"I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."` to an array 25 times', () => {
      const [array, t] = makeArray()
      const strangeArray = forLoop(array)

      expect(strangeArray.length).to.equal(t + 25)

      const testArray = strangeArray.slice(array.length)

      for (let i = 0, l = testArray.length; i < l; i++) {
        let s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`
        expect(testArray[i]).to.equal(s)
      }
    })
  })

  describe('whileLoop(n)', () => {
    it('counts down from n to 0', () => {
      const spy = chai.spy.on(console, 'log')
      const n = Math.floor(Math.random() * 100)

      expect(whileLoop(n)).to.equal('done')
      expect(spy).to.have.been.called.exactly(n)

      console.log.reset()
    })
  })

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