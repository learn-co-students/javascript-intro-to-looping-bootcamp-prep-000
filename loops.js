function forLoop (arr1) {
  for (let i=0; i<25; i++) {
    if(i===1) {arr1.push(`I am 1 strange loop.`)}
    else {arr1.push(`I am ${i} strange loops.`)}
  }
  return arr1
}

function whileLoop (numb) {
  while(numb>0) {console.log(--numb)}
  return 'done'
}

var i = 0;

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop (arr) {
  do {
    arr.pop()
  }while (incrementVariable() && arr.length>0)
  return arr
}
