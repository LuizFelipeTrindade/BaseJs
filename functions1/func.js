const bunda = (chuchu) => {
    chuchu.marca = "Toyota";
    chuchu.modelo = "Cívic"
    chuchu.ano = 2004
}
 


/*
* Declare a variável 'meucarro';
* crie e inicialize um novo Objeto;
* atribua referência para 'meucarro'
*/
var meucarro = {
    marca: "Honda",
    modelo: "Accord",
    ano: 1998
};
 
/* Exibe 'Honda' */
  
 
/* Passe a referência do objeto para a função */
bunda(meucarro);

/*
/* Exibe 'Toyota' como valor para a propriedade 'marca'
/* do objeto, mudado pela função.
*/
console.log(meucarro.marca);
console.log(meucarro.modelo);
console.log(meucarro.ano);
console.log(typeof(bunda));//Não é um objeto e sim uma function

let variavel = "This is String"

function retornaundefined() {
    let num1 = 10, num2 = 10, soma = num1 + num2
    
}

variavel = retornaundefined; //A variavel recebeu a função

console.log(variavel())



function arra(){
    let ar = [1,2,3,4]
    ar.push(5)
    return ar
}

console.log(arra())