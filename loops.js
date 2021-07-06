function forLoop(d) {
  for (var i = 0; i < 25; i++) {
    if (i === 0) {
      d.push('I am 1 strange loop.')
    } else {
      d.push(`I am ${i} strange loops.`)
    }
  }
  return d
}

function whileLoop(d) {
   while (d > 0) {
     console.log(--d)
     if (d === 0) {
       return 'done'
     }
   }
}

function doWhileLoop (d) {
   do {
     d.pop()
   } while (d.length > 0 && maybeTrue())
   return d
}