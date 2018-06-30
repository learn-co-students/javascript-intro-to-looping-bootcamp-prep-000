function maybeTrue(){
    return Math.random() >= 0.5;
}

function forLoop(array){
    for (var i = 0; i < 25; i++){
        array.push(1 === i ? "I am 1 strange loop." : `I am ${i} strange loops.`)
    }
    return array;
}

function whileLoop(n){
    while (n > 0){
        console.log(n);
        n -= 1;
    }
    return 'done';
}

function doWhileLoop(array){
    do {
        array.pop();
    } while (array.length > 0 && maybeTrue());

    return array;
}