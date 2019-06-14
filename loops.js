function forLoop(array){
for (i = 0; i < 25; i++) {
array.push(“I am "+ i +" strange loop.”)
}
return array
}


function whileLoop(number) {
while (number > 0) {
  number= number-1
console.log(number)
}
return “done”
}


function incrementVariable(num) {
  num = num - 1
  return num
}

do {
  console.log("I run once regardless.")
} while (incrementVariable(num) < num)
