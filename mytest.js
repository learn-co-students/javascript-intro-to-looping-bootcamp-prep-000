function forLoop(){
  var someArray = []
  for (var i = 0; i <= 25; i++){
    if (i == 1) {
    someArray = ["I am " + i + " strange loop.\n"]
    } else {
      someArray += ["I am " + i + " strange loops.\n"]
    }
    console.log(someArray)
  }
}

forLoop()