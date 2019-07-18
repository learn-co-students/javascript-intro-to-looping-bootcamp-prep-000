function forLoop(array) {
	for (let i = 0; i < 25; i++) {
		if (i === 1) {
			array.push('I am 1 strange loop.');
		} else {
			array.push(`I am ${i} strange loops.`);
		}
	}

	return array;
}

function whileLoop(n) {
	while (n > 0) {
		console.log(--n);
	}

	return 'done';
}


function doWhileLoop(integer) {
var i =0; i< 10;i++;
function incrementVariable(){
  i=i+10;
}
    do{console.log ("I run once regardless." );
  }while(incrementVariable()
 < 10);
 return integer;
}