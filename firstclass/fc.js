
// FUNÇÃO CALL BACK //

function ola() {
    return "Olá, "
}

function mensagem(firtsmensage, secondmensagem){
    console.log(ola() + "Javascript")
}

mensagem(ola, mensagem) //OutPut = Olá, Javascript



// FUNÇÃO DENTRO DE UMA VARIAVEL //

const sayHello = () => {
   return function() {
      console.log("Hello!");
   }
}

const Apr = sayHello() // Você tem que usar outra variável. Se você fosse chamar sayHello diretamente, ela retornaria a função em si sem chamar a função retornada.
Apr()



// Usando parênteses duplo
function saHello() {
   return function() {
      console.log("Hello!");
   }
}
saHello()(); //O parenteses duplo servve para chamar as duas funções, tanto a primeira que retorna uma função, quanto a função retornada , é bem útil para não poluir o código colocando outras variáveis

