/*function makeArray() {
  
  const t = Math.floor(Math.random() * 10)
}

  for (let i = 0; i < 25; i++) {
    array.push("`I am ${i} strange loop ${i === 0 ? }`")
  }
  return [array, t]

function makeArray() {
  const array = []
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.")
  }

  return [array, t]
}
*/
var array = [];

function forLoop(array) {
  array = [...array];
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array
}
/*
function forLoop(array){
  for(let i=0; i<25;i++){
    if(i===1){
      console.log("I am 1 strange loop")
   }else{
     console.log(`I am ${i} strange loops.`)
   }
   return array
  }
  
}*/
function whileLoop(n){
  let countdown = 100;
  while(countdown >0){
    console.log(--countdown)
  }
  return done
}

function doWhileLoop(array){
  return Math.random() >= 0.5
}
  do{
    console.log('doo-bee-doo-bee-doo')
  }
  while(maybeTrue())
}


 /*const [array, t] = makeArray()
      const strangeArray = forLoop(array)

      expect(strangeArray.length).to.equal(t + 25)

      const testArray = strangeArray.slice(array.length)
*/
