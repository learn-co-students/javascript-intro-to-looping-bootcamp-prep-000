function forLoop(array){
for (i = 0; i < 25; i++){
if (i === 1) {
array.push('I am 1 strange loop.');
} else {
array.push(`I am ${i} strange loops.`);
}
}
return array;
}
  
function whileLoop(n) {
let countdown = n;
  
while (n > 0) {
console.log(--n);
}
return 'done';
}

function doWhileLoop(array){
function maybeTrue() {
return Math.random() >= 0.5;
}
do {
 console.log("I run once regardless");
} while (array.length > -1 &&maybeTrue());
return array;

}

//took  out part of test for there is something wrong