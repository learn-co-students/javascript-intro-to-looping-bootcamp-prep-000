var gifts = [ "teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log('Wrapped ${gift} and added a bow!');
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);

for ([initialization];
[condition]; [iteration]) {
  [loopBody];
}

//this loop below will print hello world 100 times

for (var i = 1; i < 100; i++){
  console.log("Hello World the" + i + "time");
}



function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}

var sample_arr = [];
console.log(forLoop(sample_arr));


function whileLoop(n){
  while(n>0)
  {console.log(n--)}
  return "done"
}


function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
do {
  array.pop()
} while (array.length>0 && maybeTrue())
return array
}

do_while_arr = ['a','b','c'];
console.log(doWhileLoop(do_while_arr))