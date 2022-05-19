function Carro(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

const carro1 = new Carro('Charger', 'RT', 1970)

// console.log(carro1)

console.log(new Carro('charger', 'RT', 1970))


function Aluno() {

    this.nome = "Miguel"
  
    return // return vazio!
  }
  
  console.log(new Aluno().nome )



//==================================//
  function Ventilador(velmax){
    this.velocidadeMaxima = velmax;
    this.ligado = false;
}

//Instância

const ventilador1 = new Ventilador(3);//Usar sempre a palavra new para instânciasr a função

console.log(ventilador1.velocidadeMaxima)

ventilador1.cor = 'Branco'
console.log(ventilador1.cor)

ventilador1.ligadesliga = function(){
    if(this.ligado){
    this.ligado = false
    }else{
        this.ligado = true
    }
}

ventilador1.ligadesliga()
console.log(ventilador1.ligado)
ventilador1.ligadesliga()
console.log(ventilador1.ligado)

console.log(ventilador1)