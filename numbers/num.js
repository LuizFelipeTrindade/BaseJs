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

