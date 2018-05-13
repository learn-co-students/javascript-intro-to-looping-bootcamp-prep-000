
function forLoop(array){
  var i;
  for(let i=0; i<25; i++){
    if(i === 1){
      array.push("I am 1 strange loop.");
    }
    else{
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

let countdown = 26;

function whileLoop(countdown){
	while(countdown > 0){
		console.log(--countdown);
	}
	return 'done';
}

