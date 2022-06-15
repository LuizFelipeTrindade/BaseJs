//Função Anônima é uma função dentro de uma variavel sem um nome para ele, exemplo abaixo


let anonimato = function(){
    let haha = 'sou uma função anonima'
    return haha
}

console.log(anonimato)
console.log(anonimato())

let arrow = () => {
    return 'I am return of arrow function bitch'
}

console.log(arrow)
console.log(arrow())


//Função IIFE, função de retorno imediato

const novademais = (function(){
    var nome = "Luiz";
    return nome
})()

console.log(novademais) //Não Precisa chamar a função

//Declaração Classica

function somar(num1, num2){
    const soma = num1 + num2;
    return soma
}

console.log(somar(15,15))

const resultadosoma = somar(15, 15)

console.log(resultadosoma + 10)
