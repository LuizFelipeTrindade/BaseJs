const stra  = () => {
    return 'cat'.charAt(0); //Retorna "c"
    //return 'cat'.charAt(1), Retorna "a"
    //return 'cat'.charAt(2), Retorna "t"
}

console.log(stra())

const arr = new String('Suco de maça, ');
const abb = String('Suco de Laranja, ');

console.log(arr, typeof(arr))
console.log(abb, typeof(abb))


//Tratando string como Array-like
const arrow = () => {
    return "Porta"[1]//Retorna "o"
}

console.log(arrow());


//Comparação de Strings
var a = "a";
var b = "b";
if (a < b) // verdadeiro
  console.log(a + " é menor que " + b);
else if (a > b)
  console.log(a + " é maior que " + b);
else
  console.log(a + " e " + b + " são iguais.");


