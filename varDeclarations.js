// sempre use let, é uma melhoria do var
// const é uma constante, ou seja uma variavel cujo o valor nao pode ser alterado

let lado1 = 20
let lado2 = 10
let forma = 'circulo'
let area
let perimetro
let raio = 10
const pi = 3.14
var dica = 'nao use var xD'

if(forma === 'retangulo'){
     area = lado1 * lado2
     perimetro = lado1 *2 + lado2 *2
} else{
    if(forma === 'circulo'){
        area = pi * (raio * raio) 
        perimetro = 2 * pi * raio
    }
}

console.log(`Área: ${area} | Perímetro: ${perimetro} -> ${dica}`)

