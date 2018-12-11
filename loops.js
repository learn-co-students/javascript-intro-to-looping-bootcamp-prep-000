var array = []

function forLoop(array){
  for (var i = 0 ; i <25 ; i++){
    if (i === 1){ array.push("I am 1 strange loop.")}
    else {array.push(`I am ${i} strange loops.`)}
  }
  return array 
}

//console.log(forLoop(array))
forLoop()

function whileLoop(num){
  while (num>0){console.log(--num)}
  return "done"
} console.log(whileLoop(10))

var i = 0;
 

function doWhileLoop(array) {
	var i = 0;

	function incrementVariable() {
		i = i + 1;
	}

	do {

		array = array.slice(1)
		incrementVariable();
	} while (array.length > 0 && !incrementVariable);

  return array;
}




