function stringReversal(){
    var str = "Hello World!"
    var reversedString = "a";
    for (let i = str.length-1; i >= 0; i--) {
       reversedString + str[i];   
    }
    console.log(reversedString);
   
}

stringReversal();