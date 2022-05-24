function aprender(estudo, horario, conteudo){
    this.estudo = estudo;
    this.horario = horario;
    this.conteudo = conteudo;
}

const app = new aprender('Estudar o tempo todo', 14,'Javascript')

console.log(new aprender('Estudar o tempo todo', 14,'Javascript'))//ou 

console.log(app)

function f2(){
    "use strict"; // assume modo estrito
    return this
}

//f2() === undefined// true

var globalObject = this;
var foo = (() => {
    return this
}); //This assumiu um objeto global dentro de uma function arrow, sendo assim, não é recomendado que use this em arrow function, apenas em funções 'clássicas'

console.log(foo() === globalObject)


var obj = { bar : function() {
    var x = (() => this);
    return x;
  }
};

// Chama bar como método de obj, configurando seu this como obj
// Assina à variável fn uma referência para a função retornada
var fn = obj.bar();

// Chamar fn, sem definir this, por padrão, referenciaria
// ao objeto global ou undefined em modo estrito (strict mode)
console.log(fn() === obj); // true




function animals(obj){
   obj = {
    Name: 'dog',
    legs: 4,
    Color: 'White',
    fullanimais : function(){
      return `this is ${this.Name} have ${this.legs} legs and your color is ${this.Color}`
    }
  }
  console.log(obj.fullanimais())
}
animals()


// ======== CALL ==========//

//No exemplo a seguir, criaremos um objeto e uma função que faz referência ao this sem ter o this referenciado em seu escopo.

const article = {
  title: 'Descomplicando call, apply e bind',
  language: 'JavaScript',
};

function print() {
  console.log(`${this.title} em ${this.language}.`);
}

// print(); == Nesse método ele retorna undefined, pois o objeto que "print" se refere não está disponivel no escopo , entretando usando "print.call(article);" ele vai conseguir achar o objeto


print.call(article); // O call específicou o contexto do this 



// ======== APPLY ========== //

//O Apply funciona exatamente como o método Call, porém seu segundo parâmetro recebe um Array dos parâmetros da função, enquanto o primeiro parâmetro continua recebendo o valor que será atribuído ao this. Vejamos um novo exemplo, mas agora utilizando o apply:

function sumNumbers(firstNumber, secondNumber) {
	const sum =  this + firstNumber + secondNumber;

	console.log(sum)
}

sumNumbers.apply(5/* This*/, /*Array*/[2, 7]) // 14

  
  
  
  