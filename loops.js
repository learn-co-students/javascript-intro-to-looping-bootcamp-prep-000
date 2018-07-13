function forLoop (arr){
  
  for (var i = 0; i < 25; i++){
    if (i === 1){
      arr.push("I am 1 strange loop.")
    }else {
      arr.push(`I am ${i} strange loops.`)
    }
  }return arr
}

function whileLoop (num){
  while (num > 0){
    console.log(--num)
  }
  return 'done'
}

function maybeTrue() {
  a = Math.random() >= 0.5
  console.log(a)
  return a
}

function doWhileLoop(arr){
  console.log("array is: "+arr)
  do {
    console.log("inside the do: ")
    arr.shift()
    console.log("array is now: "+arr)
  } while (arr.length > 0 && maybeTrue());
  return arr
}