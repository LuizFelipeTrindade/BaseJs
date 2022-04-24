var n1 = 11

var n2 = 2

var s = n1 / n2

console.log(typeof(s))

var n5 = Number("1.1")

console.log(n5)

//A propriedade Number.EPSILON representa a diferença entre 1 e o menor ponto flutuante maior que 1.

const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);
// expected output: 2.7755575615628914e-17

console.log(result < Number.EPSILON);
// expected output: true

// METODOS NUMBERS //


//IsFinite()
var s4 = Number.isFinite(15);

console.log(s4) // Vai retorna booleanos, nesse casao retorna true


//isInteger()
var macaco = Number.isInteger(1.5);//Não é inteiro = false

var melancia = Number.isInteger(8); // É inteiro = true

console.log(macaco, melancia);


//isNaN()

var cua = Number.isNaN("37");

var mua = Number.isNaN(NaN);

console.log(cua, mua, typeof(cua));

//Toexponential()

var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77 .toExponential());     // logs 7.7e+1

//ToFixed()

var numObjeto = 12345.6789;

numObjeto.toFixed();       // Retorna '12346': note o arredondamento, não possui nenhuma parte fracionária
numObjeto.toFixed(1);      // Retorna '12345.7': note o arredondamento


