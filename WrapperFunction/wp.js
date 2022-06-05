const str1 = String("Brazilian Dev"); //String
const str2 = new String("Brazilian Dev2"); //Objeto
console.log(`str1 ${str1} str2 ${str2}`);

console.log(`str1 dividida = ${str1.split('')}  
str2 dividida = ${str2.split('')}`);  //o comando .split faz com que a string fique com um monte de vírgula, retornando um array de strings

 const str2Convertido = str2.valueOf();  //JavaScript chama o método valueOf para converter um objeto em um valor primitivo. Você raramente precisará chamar o método valueOf por ele mesmo; O JavaScript chamará ele automaticamente quando encontrar um objeto onde um valor primitivo for esperado
 console.log(typeof str2Convertido);


const num1 = Number('1');
const num2 = new Number('2');

console.log(`num1 ${num1} num2 ${num2}`);

console.log(`Num1 com 2 casas décimais ${num1.toFixed(2)} 
num 2 com 3 casas décimais ${num2.toFixed(3)}`) //.toFixed() acrescenta casas décimais em um número. PS = Só funciona com Numbers

console.log(typeof num1)

//Wrapper function nada mais é que um método para o tipos primitivos //



