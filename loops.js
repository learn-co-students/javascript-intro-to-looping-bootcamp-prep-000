   function forLoop(array) {
     const arr = [];
    	for (let i = 1; i < 26; i++) {
  	  
  		if (i === 1) {
  			arr.push("I am 1 strange loop.");
  		} else  {
  			arr.push(`I am ${i} strange loops`);
  		}
  	}
    return arr;
  }
  
  function whileLoop(n) {
    let countdown = n;
    
    while(countdown > 0) {
      console.log(--countdown);
    }
    return "done";
  }
  
  
  