//Array é um objeto global de alto nível semelhante a uma lista 

let arra = ['Maçã' /*0*/, 'Banana' /*1*/];

console.log(arra.length)

//Acessar um item (index) do Array

var primeiro = arra[0];
// Maçã

var ultimo = arra[arra.length - 1 /*Elemento 1*/];
// Banana

console.log(primeiro, ultimo);

arra.forEach(function (item, indice, array) {  //O foreach é uma estrutura de repetição da linguagem de programação PHP. Ele é usado para facilitar a iteração de estruturas como arrays, objetos e outros tipos que são iteráveis. Como resultado ele percorrerá todos os itens da coleção, disponibilizando a chave e o valor de cada elemento.
    console.log(item, indice);
  });
  // Maçã 0
  // Banana 1


const novocu = ['Sexo1', 'Sexo2'];


for(let i = 0; i < novocu.length; i++){
    console.log(i)
} //vai retornar 0 e 1