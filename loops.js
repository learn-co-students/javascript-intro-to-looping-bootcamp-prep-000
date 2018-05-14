function forLoop(array) {
var i; 
for (let i= 0; i<25; i++) { 
   array.push("I am" +"${i}"+ "strange loop")
}
console.log("I am" +"${i}"+ "strange loop")

return array
}

function whileLoop(number) {
    let countdown = number;
  while(countdown<25){
    console.log("done")
  }
     }