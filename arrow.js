function somaRuim(x1, x2){
    return x1+x2;
}

const soma = (x1, x2) => x1 + x2
//this two are the same thing but arrow is better xD
//always use arrow functions layout xD

//if your function has more than 1 line you need return and keys
const verify = (a, b) => {
    if (a == b){
        return "equals"
    }else{
        return "not equals"
    }
}

somaRuim(1, 2);
soma(1, 2);
console.log(verify(1, 1));