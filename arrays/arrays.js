//Array é um objeto global de alto nível semelhante a uma lista 

let arra = ['Maçã' /*0*/, 'Banana' /*1*/];

arra.push('Laranja')//Adicionar um valor ao final do array, ele também é um escopo, se deixalo no final do código ele não aparece nos dois consoles abaixo, por isso que coloquei em cima, ele não dá o hoisting

var ult = arra.pop() //Retira o último valor do array ('Laranja')

var pri = arra.shift() //Retira o primeiro valor do array ('Maçã')

var adicionar = arra.unshift('Morango') //adiciona como primeiro valor do array

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


//Procurar o índice de um item na Array

var frutas = ['Maçã', 'Banana']

frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf('Banana'); // Acha o indice dessa strig no array
// 1

//Remover um item pela posição do índice
var removedItem = frutas.splice(pos, 1); // é assim que se remove um item pelo índice
// ['Morango', 'Manga']

console.log(frutas, pos)


