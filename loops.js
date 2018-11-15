/*forLoop(array) function*/
function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    }
    else{
      array.push(`I am ${i} strange loops.`)
    }
  }return array
}

/*whileLoop(n) function
counts down from n to 0*/
function whileLoop(n){
  while(n > 0){
    console.log(--n)
  }
  console.log('done')
  return n = 'done'
}

/*doWhileLoop(array) function
removes elements from array until array is empty or until
incrementVariable returns false*/
function incrementVariable(){
  i = i + 1
}

function doWhileLoop(array){
  do{
    array.pop()
    return array
  }while( array.length > 0 && incrementVariable())
  return [array]
}
