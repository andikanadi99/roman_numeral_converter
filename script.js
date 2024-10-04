/* DOM Variables */
let inputField = document.getElementById("number");
let buttonField = document.getElementById("convert-btn");
let outputField = document.getElementById("output");
/* Global Variables */

/* Functions */
function conversion(num) {
  //Negative number and max number checker
  if(Number(num) < 0){
    return "Please enter a number greater than or equal to 1";
  }
  else if(Number(num) >= 4000){
    return "Please enter a number less than or equal to 3999";
  }
  let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
function handleClick(){
  let input = inputField.value;
  let output;
  //Check if input is empty or not
  if(input.length == 0){
    output = "Please enter a valid number";
  }
  else{
    output = conversion(input);
  }
  outputField.innerText = output;
  
}
//Function calls
buttonField.onclick = handleClick;
