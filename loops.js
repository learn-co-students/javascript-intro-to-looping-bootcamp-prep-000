function forLoop(array){
for (let i = 0; i < 25; i++){
if (i === 1){
	array.push(`I am ${i} strange loop.`)
}
else {
	array.push(`I am ${i} strange loops.`)
}
}
return array
}
console.log(forLoop([]))

function whileLoop(num){
	let countdown = num;
	while (num > 0){
	num--
	console.log(countdown)
}
return "done"
}
whileLoop(100)

function doWhileLoop(array){

var i = 0;
function incrementVariable() {
  i = i + 1;
}
do {
  incrementVariable();
} while (array.length > 0 && incrementVariable());
	array.pop()

return "false"
}
console.log(doWhileLoop([]))