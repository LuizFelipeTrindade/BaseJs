//=========ESCOPO LOCAL===========//

function carros() {
    var nomeCarro = "Ferrari"

    console.log(nomeCarro) //======== Ele reconhece
}


//console.log(nomeCarro) //==Ela não reconhece a variavel pq não está visivel fora da função

carros() //===== Chamada da função

//=========ESCOPO GLOBAL===========//

var nome = "Mustang";

console.log(nome)

function carro() {
    console.log(nome)
}

carro()

for(let i = 0; i < 10; i++){
    console.log(i)
}
for(var j = 0; j < 10; j++){
    console.log(j)
}