function forLoop(array){
  for (let num = 0; num < 25; num++){
    if (num === 1){
     array.push(`I am ${num} strange loop.`)
    }
    else 
      array.push(`I am ${num} strange loops.`)
  }
  return array
}

function whileLoop(num){
  while (num > 0 ){
    console.log(--num)
 }
  return 'done'
}

function doWhileLoop(array){
  let counter = 0
  do {
		console.log('array.length = ' + array.length + ' and i = ' + counter)
		array = array.slice(1)
		counter++
	} while (array.length > 0 && counter < 5)
	return array
}
