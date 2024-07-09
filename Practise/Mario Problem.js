let fruitNinja = "#######";

for(let i=0; i<7; i++){
  var counter = 0;
  for(let j=0; j<=i; j++){
    counter++
  }
  console.log(fruitNinja.substring(0,counter));
}