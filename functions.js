//1) declaration
function imprime(texto){
    console.log(texto)
}

//2) execution
imprime("aoba")

// other 2 types of function

function soma(){
    //when you call this function you receive its return value
    return 1276371826 * 128736128763
}

console.log(soma())

//now I'm calling the print function and passing the return of soma as a parameter
imprime(soma())

