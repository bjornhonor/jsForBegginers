//if you use "" you'll need to check the blanks and commas. And also use + to group the strings
//but if you use `` you can create the layout you want direct inside the ``. You'll need to use ${var here}
//to print your vars
const nome2 = "Bjorn"
const nome1 = "Bruno"
let idade = 2022 - 2001
let apresentação = nome1 + " = " + nome2 + " e tenho " + idade + " anos"
let apresentaçãoMelhorada = `${nome1} = ${nome2} e tenho ${idade} anos`

console.log(apresentação)
console.log(apresentaçãoMelhorada)