function forLoop(items){for(var i=0;i<25;i++){items.push(`I am ${i} strange loop${i<2 ? '' : 's'}.`);}return items;}

function whileLoop(n){while(n>0){console.log(n);n-=1;if(n<1){return 'done';}}}

function doWhileLoop(list){do{list.shift();} while(list.length>0);return list}

