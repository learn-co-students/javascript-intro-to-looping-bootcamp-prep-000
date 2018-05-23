
function forLoop(array) {
  
	let newArray = [];
	
	for(let i = 1; i < 25; i++) {
	  
	 if(i === 1) {
	  newArray.push(`I am ${i} strange loop`);
	} else {
	  newArray.push(`I am ${i} strange loops`);
	}
	}
	return newArray;
   }
  console.log(forLoop());

/* ===================================  */

function whileLoop(number) {
let n = number;
while (n > 0) {
  console.log(--n);
  }
  return ('done');
}
whileLoop(24);


/* ===================================  */

 function maybeTrue() {
    return Math.random() >= 0.5
 }
 //console.log(maybeTrue());

function doWhileLoop (array) {
  let newArray = [];
  do {
    array.pop = newArray;
  }
  while (
   array.length > 0 && maybeTrue());
}
return newArray;


