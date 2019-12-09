function forLoop(array) {
  //var retArr = []
  for(i=0;i<25;i++) {
    //console.log(`"I am ${i} strange loop${i === 1 ?'':'s'}."`)
    array.push(`I am ${i} strange loop${i === 1 ?'':'s'}.`)
  }

  return array
}

function whileLoop(num) {
  var n = num
  while(n > 0) {
    console.log(n--)
  }

  return 'done'
}

var j = 0;

function incrementVariable() {
  j = j + 1;
  return j;
}

function doWhileLoop(num) {
  do{
    console.log("I run once regardless.");
  }while (incrementVariable() <= num);
}
