

const idadeMinima = 18
let idadeCliente = 16

//if you need to do a lot of instructions after you compared, use if
if(idadeCliente >= idadeMinima){
    console.log("pode beber o que quiser")
} else {
    console.log("aguinha")
}

//if you need to do something very simple like print or return, you can use this layout. Ternary if
console.log(idadeCliente>=idadeMinima ? "pode beber o que quiser" : "aguinha")