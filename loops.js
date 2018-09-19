
var loopArray = []

function forLoop(array) {
const t = 25
array = loopArray.slice(array.length)
for(let i = 1; i < t; i ++) {
  if(i === 1) {
    array.push("I am" + i + "strange loop.")
  } else {
    array.push(`I am ${i} strange loop${i === 0 ? ' ' : ' s '}.`)
    }
  }
}

forLoop(loopArray)

