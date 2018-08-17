function forLoop(n){
  for(let i = 0 ; i < 25 ;i++){
    if (i === 1){
      n.push("I am " +i+" strange loop.")
    }
    else{
      n.push("I am " +i+" strange loops.")
    }
  }
  return n
}
function whileLoop(n){
  while(n > 0){
    console.log(n)
    n = n -1
  }
  return "done"
}
function doWhileLoop(array) {
	var i = 0;

	function incrementVariable() {
		i = i + 1;
	}

	do {
		console.log('array.length = ' + array.length + ' and i = ' + i);
		array = array.slice(1);
		incrementVariable();
	} while (array.length > 0 && i < 5);

	return array;
}