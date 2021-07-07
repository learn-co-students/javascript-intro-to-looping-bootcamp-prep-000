


function forLoop (newArray) {
  
  for (let i=0; i<25; i++) {
  if (i === 1 ) {
    newArray.push(`I am ${i} strange loop.`)
  } else {
    newArray.push(`I am ${i} strange loops.`)
  }
}
return newArray
}



function whileLoop(n) {
  countdown = n
  while (countdown > 0) {
    console.log(countdown)
    countdown-=1
  }
  return 'done'
}
whileLoop(22)







function doWhileLoop(num) {
  var i = 0;
    
 function incrementVariable() {
        i = i + 1;
        return i;
  }
  
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);

}
















