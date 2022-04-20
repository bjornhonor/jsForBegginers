//HOISTING
//Js reads all your functions / vars and put on the "top of your program" so you can call functions before
//it is even created
let x1 = 1;
let x2 = 2;
console.log(soma());

function soma() {return x1 + x2}

