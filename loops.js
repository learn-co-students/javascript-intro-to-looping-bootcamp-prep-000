
function forLoop(a){
  for (let i = 0; i < 25; i++) {
  output = `I am ${i} strange loop${i === 1 ? '' : 's'}.`

  a[a.length] = output
    }
return a
}
console.log(forLoop())

function whileLoop(Num){
  while (Num > 0){
    console.log(Num);
    Num -= 1
  }
  return "done"
}
var i = 0;

function incrementVariable() {
  i = i + 1;
}
function doWhileLoop(a){
  do {a.pop(incrementVariable(a))}
  while (a.length > 0 && incrementVariable());
  return a
}
