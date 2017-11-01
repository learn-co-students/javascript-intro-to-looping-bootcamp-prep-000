var array = []

 function forLoop(array){
   for (let i = 0; i < 25; i++)
     if (i === 1)
    array.push(`I am ${i} strange loop.`)
     else
     array.push(`I am ${i} strange loops.`)
   return array
 }

 function whileLoop(num){
   while (num > 0) {
     num -= 1  
     console.log(num)
   }
     return 'done'
 }


 function doWhileLoop(array) {
   function maybeTrue() {
     var randomNum = Math.random()
     console.log(randomNum)
    return randomNum >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())
  return array
}
