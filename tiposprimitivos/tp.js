//Symnbol

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");


if(Symbol("foo") === Symbol("foo")){
    //False
}

//String

var str = "Sou um conjunto de caracteres"

//Number

var num = 10

//Boolean

var verdade = true;

var mentira = false;

//null

var nulo = null;

//undefined

var indefinido = undefined;

console.log(typeof(str))

console.log(typeof(num))

console.log(typeof(verdade));

console.log(typeof(mentira));

console.log(typeof(nulo));

console.log(typeof(indefinido));

console.log(typeof(sym1));