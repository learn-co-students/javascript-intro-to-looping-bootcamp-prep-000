/*global describe, it*/

var names = ["Taylor", "Marcia", "Kamille", "Amber", "Travis"];
	var text = "";
    
    for (var i = 0; i < names.length; i++) {
    	text += names[i] + "<br>";
    }

	var names = ["Taylor", "Marcia", "Kamille", "Amber", "Travis"];
	var text = "";
	var x = 0;

	do {
		text += names[x] + "<br>";
    	x++;

	} while (x < 10);
	
	
	var names = ["Taylor", "Marcia", "Kamille", "Amber", "Travis"];
	var text = "";
	var x = 0;

	while(x < 10) {
		text += x + "<br>";
		x++
	}